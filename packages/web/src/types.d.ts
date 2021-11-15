declare module "*.scss" {
  const styles: { [className: string]: string };
  export default styles;
}

declare module "static-kdtree" {
  export default function (points: number[][]): {
    knn(point: number[], k: number): number[];
  };
}
