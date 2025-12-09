export class Edge {
	horizontal: boolean;
	p1: { y: number; x: number };
	p2: { y: number; x: number };

	constructor(p1: { y: number; x: number }, p2: { y: number; x: number }) {
		this.horizontal = p1.y === p2.y;
		this.p1 = this.horizontal ? (p1.x < p2.x ? p1 : p2) : p1.y < p2.y ? p1 : p2;
		this.p2 = this.horizontal ? (p1.x < p2.x ? p2 : p1) : p1.y < p2.y ? p2 : p1;
	}

	intersects(that: Edge): boolean {
		if (this.horizontal === that.horizontal) {
			return false;
		}

		const horizontal = this.horizontal ? this : that;
		const vertical = this.horizontal ? that : this;

		return (
			vertical.p1.x > horizontal.p1.x &&
			vertical.p1.x < horizontal.p2.x &&
			horizontal.p1.y > vertical.p1.y &&
			horizontal.p1.y < vertical.p2.y
		);
	}
}

export class Polygon {
	points: { y: number; x: number }[];
	edges: Edge[];

	constructor(points: { y: number; x: number }[]) {
		this.points = points;
		this.edges = [];
		points.forEach((p, i) => {
			const next = points[(i + 1) % points.length];
			this.edges.push(new Edge(p, next));
		});
	}

	intersects(edge: Edge): boolean {
		return this.edges.some((e) => e.intersects(edge));
	}
}
