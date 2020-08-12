
import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { animate, AnimationBuilder, AnimationPlayer, style } from '@angular/animations';
import { NavigationEnd, Router } from '@angular/router';

import { Subscription } from 'rxjs';

@Directive({
	selector: '[contentAnimate]'
})
export class ContentAnimateDirective implements OnInit, OnDestroy {

	player: AnimationPlayer;

	private events: Subscription;

	/**
	 * Directive Consturctor
	 * @param el: ElementRef
	 * @param router: Router
	 * @param animationBuilder: AnimationBuilder
	 */
	constructor(
		private el: ElementRef,
		private router: Router,
		private animationBuilder: AnimationBuilder) {
	}

	ngOnInit(): void {
		this.initAnimate();
		this.events = this.router.events.subscribe(event => {
			if (event instanceof NavigationEnd) {
				this.player.play();
			}
		});
	}
	ngOnDestroy(): void {
		this.events.unsubscribe();
		this.player.destroy();
	}
	initAnimate() {
		this.player = this.animationBuilder
			.build([
				style({
					transform: 'translateY(-1%)',
					opacity: 0,
          position: 'static',
          height: '100%'
				}),
				animate(
					'0.5s ease-in-out',
					style({transform: 'translateY(0%)', opacity: 1})
				)
			])
			.create(this.el.nativeElement);
	}
}
