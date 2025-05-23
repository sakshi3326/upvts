import React, { useEffect, useRef, useState } from "react";
import "../css/Flyer.css";
import { gsap } from "gsap";

const Carousel3D: React.FC = () => {
 
  // const images = Array.from({ length: 11 }, (_, i) => require(`../assets/images/${i + 1}.jpg`));



  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const fpsRef = useRef<HTMLDivElement>(null);

  const [currentPage, setCurrentPage] = useState(0);
  const totalItems = 66;
  const itemsPerPage = 11;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  let mouseX = 0,
    mouseY = 0,
    mouseZ = 0,
    addX = 0;
  const rY = 360 / itemsPerPage;
  const radius = Math.round(250 / Math.tan(Math.PI / itemsPerPage));

  const allCards = Array.from({ length: totalItems }, (_, i) => i + 1);
  const cardsToShow = allCards.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  useEffect(() => {
    const container = containerRef.current!;
    const carousel = carouselRef.current!;
    const fpsDisplay = fpsRef.current!;

    gsap.set(container, { perspective: 600 });
    gsap.set(carousel, { z: -radius });

    const items = Array.from(carousel.children) as HTMLElement[];
    items.forEach((item, i) => {
      const block = item.querySelector(".carouselItemInner") as HTMLElement;
      gsap.set(item, {
        rotationY: rY * i,
        z: radius,
        transformOrigin: `50% 50% -${radius}px`,
      });
      animateIn(item, block);
    });

    const handleMouseMove = (event: MouseEvent) => {
      mouseX =
        -(-(window.innerWidth * 0.5) + event.pageX) * 0.0025;
      mouseY =
        -(-(window.innerHeight * 0.5) + event.pageY) * 0.01;
      mouseZ =
        -radius -
        (Math.abs(-(window.innerHeight * 0.5) + event.pageY) -
          200);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const fpsCounter = {
      times: [] as number[],
      span: 20,
      tick() {
        this.times.push(+new Date());
        if (this.times.length > this.span + 1) {
          this.times.shift();
          const seconds =
            (this.times[this.times.length - 1] -
              this.times[0]) /
            1000;
          return Math.round(this.span / seconds);
        }
        return 0;
      },
    };

    const interval = setInterval(() => {
      addX += mouseX;
      gsap.to(carousel, {
        rotationY: addX,
        rotationX: mouseY,
        duration: 1,
        ease: "power3.out",
      });
      gsap.set(carousel, { z: mouseZ });
      fpsDisplay.textContent = `Framerate: ${fpsCounter.tick()}/60 FPS`;
    }, 1000 / 60);

    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (!carouselRef.current) return;
    const carousel = carouselRef.current;
    const items = Array.from(carousel.children) as HTMLElement[];
    items.forEach((item, i) => {
      const block = item.querySelector(".carouselItemInner") as HTMLElement;
      gsap.set(item, {
        rotationY: rY * i,
        z: radius,
        transformOrigin: `50% 50% -${radius}px`,
      });
      animateIn(item, block);
    });
  }, [currentPage]);

  const animateIn = (item: HTMLElement, block: HTMLElement) => {
    const nrX = 360 * getRandomInt(2);
    const nrY = 360 * getRandomInt(2);
    const nx = -2000 + getRandomInt(4000);
    const ny = -2000 + getRandomInt(4000);
    const nz = -4000 + getRandomInt(4000);
    const s = 1.5 + getRandomInt(10) * 0.1;
    const d = 1 - getRandomInt(8) * 0.1;

    gsap.set(item, { autoAlpha: 1, delay: d });
    gsap.set(block, {
      z: nz,
      rotationY: nrY,
      rotationX: nrX,
      x: nx,
      y: ny,
      autoAlpha: 0,
    });
    gsap.to(block, {
      delay: d,
      duration: s,
      rotationY: 0,
      rotationX: 0,
      z: 0,
      ease: "expo.inOut",
    });
    gsap.to(block, {
      delay: d,
      duration: s - 0.5,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo.inOut",
    });
  };

  const getRandomInt = (n: number) =>
    Math.floor(Math.random() * n + 1);

  return (
    <>
      <header>
        {/* <h1>3D Carousel With Pagination</h1> */}
        {/* <div ref={fpsRef} id="fps">Framerate: 0/60 FPS</div> */}
      </header>
      <div id="contentContainer" className="trans3d" ref={containerRef}>
        <section id="carouselContainer" className="trans3d" ref={carouselRef}>
          {cardsToShow.map((num, i) => (
            <figure key={i} className="carouselItem trans3d">
              <div className="carouselItemInner trans3d">{num}</div>
            </figure>
          ))}
        </section>
      </div>

      <div className="pagination-wrapper">
        <div className="pagination">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={i === currentPage ? "active" : ""}
            onClick={() => setCurrentPage(i)}
          >
            {i + 1}
          </button>
        ))}
      </div>
      </div>
    </>
  );
};

export default Carousel3D;
