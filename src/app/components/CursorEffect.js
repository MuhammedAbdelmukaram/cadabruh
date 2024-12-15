"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./CursorEffect.module.css";

const CursorEffect = () => {
    const svgRef = useRef(null);

    useEffect(() => {
        const svgns = "http://www.w3.org/2000/svg";
        const root = svgRef.current;
        const ease = 0.75;

        const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

        // Update mouse position using pageX and pageY
        const updatePointer = (event) => {
            pointer.x = event.pageX;
            pointer.y = event.pageY;
        };

        window.addEventListener("mousemove", updatePointer);

        let leader = pointer;
        const totalLines = 100;

        for (let i = 0; i < totalLines; i++) {
            leader = createLine(leader, i);
        }

        function createLine(leader, index) {
            const line = document.createElementNS(svgns, "line");
            line.setAttribute("class", styles.line); // Apply scoped class
            root.appendChild(line);

            gsap.set(line, { x: -15, y: -15, opacity: (totalLines - index) / totalLines });

            gsap.to(line, {
                duration: 1000,
                x: "+=1",
                y: "+=1",
                repeat: -1,
                modifiers: {
                    x: () => {
                        const posX = gsap.getProperty(line, "x");
                        const leaderX = gsap.getProperty(leader, "x");
                        const x = posX + (leaderX - posX) * ease;
                        line.setAttribute("x2", leaderX - x);
                        return x;
                    },
                    y: () => {
                        const posY = gsap.getProperty(line, "y");
                        const leaderY = gsap.getProperty(leader, "y");
                        const y = posY + (leaderY - posY) * ease;
                        line.setAttribute("y2", leaderY - y);
                        return y;
                    },
                },
            });

            return line;
        }

        return () => {
            window.removeEventListener("mousemove", updatePointer);
            root.innerHTML = "";
        };
    }, []);

    return <svg ref={svgRef} className={styles.svg}></svg>;
};

export default CursorEffect;
