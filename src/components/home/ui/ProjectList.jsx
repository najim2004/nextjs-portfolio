"use client";

import React, { createRef } from "react";
import PropTypes from "prop-types";
import { IProjectItem } from "@/types";
import Row from "@/components/core/Row";
import ProjectItem from "./ProjectItem";
import Column from "@/components/core/Column";

const ProjectList = ({ projects }) => {
  const carouselRef = createRef();

  const _handleOnClickPrev = () => {
    if (!carouselRef || carouselRef.current === null) return;

    let offset = 400;
    if (window.innerWidth < 480) offset = 280;

    carouselRef.current.scrollLeft -= offset;
  };

  const _handleOnClickNext = () => {
    if (!carouselRef || carouselRef.current === null) return;

    let offset = 400;
    if (window.innerWidth < 480) offset = 280;

    carouselRef.current.scrollLeft += offset;
  };

  return (
    <Column classNames="w-full mt-16">
      <Row
        classNames="w-full gap-4 overflow-x-auto no-scrollbar"
        elementRef={carouselRef}
      >
        {projects?.map((item, index) => {
          return <ProjectItem key={`project-item-${index}`} project={item} />;
        })}
      </Row>

      <Row classNames="w-full items-center justify-center gap-4 mt-8">
        <button
          type="button"
          className="app__filled_btn !px-4 !py-2 !text-base/6 !font-normal"
          onClick={_handleOnClickPrev}
        >
          Prev
        </button>

        <button
          type="button"
          className="app__filled_btn !px-4 !py-2 !text-base/6 !font-normal"
          onClick={_handleOnClickNext}
        >
          Next
        </button>
      </Row>
    </Column>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      repoType: PropTypes.oneOf(["Private", "Public"]).isRequired,
      githubUrl: PropTypes.string,
      url: PropTypes.string,
      description: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};

export default ProjectList;
