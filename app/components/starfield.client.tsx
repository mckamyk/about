import { useEffect, useRef, useState } from "react";
import ReactForceGraph, { ForceGraphMethods } from "react-force-graph-3d";
import { useDebounceValue } from "usehooks-ts";

type Node = {
  id: number;
  color: string;
};
const nodes: Node[] = [];

const starColors = [
  "#FFD700", // Yellow (G-type stars)
  "#87CEEB", // Blue (B-type stars)
  "#FF6347", // Red (M-type stars)
  "#FFFFFF", // White (A-type stars)
  "#FFA500", // Orange (K-type stars)
  "#FF69B4", // Pink/Purple (O-type stars)
];

for (let i = 0; i < 1000; i++) {
  const color = Math.floor(Math.random() * 100) % 6;
  nodes.push({ id: i, color: starColors[color] });
}

const graphData = {
  nodes,
  links: [],
};

export default () => {
  const ref = useRef<ForceGraphMethods>();
  const [displayWidth, setDisplayWidth] = useState(window.innerWidth);
  const [displayHeight, setDisplayHeight] = useState(window.innerHeight);

  const distance = 2200;

  useEffect(() => {
    window.addEventListener("resize", () => {
      setDisplayWidth(window.innerWidth);
      setDisplayHeight(window.innerHeight);
    });

    window.addEventListener("scroll", (ev) => {
      ref.current!.cameraPosition(
        {
          y: (-1 * window.scrollY) / 5,
        },
        undefined
      );
    });

    if (!ref.current) return;
    ref.current!.cameraPosition({ z: distance });

    let angle = 0;
    const inv = setInterval(() => {
      ref.current!.cameraPosition({
        x: distance * Math.sin(angle),
        z: distance * Math.cos(angle),
      });
      angle += Math.PI / 9000;
    }, 10);

    return () => clearInterval(inv);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen">
      <ReactForceGraph
        ref={ref}
        graphData={graphData}
        backgroundColor="#00000000"
        nodeColor="color"
        enableNodeDrag={false}
        enableNavigationControls={false}
        enablePointerInteraction={false}
        showNavInfo={false}
        width={displayWidth}
        height={displayHeight}
        nodeRelSize={2}
      />
      ;
    </div>
  );
};
