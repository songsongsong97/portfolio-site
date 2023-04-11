const container = {
    hidden: { opacity: 0, y: -25 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
        duration: 0.5,
        type: "tween",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, type: "tween" } },
  };

export {container, item};