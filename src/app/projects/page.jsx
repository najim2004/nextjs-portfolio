import React, { Suspense } from "react";
import PropTypes from "prop-types";
import PageBox from "@/components/core/PageBox";
import ProjectsSection1 from "@/components/projects/Section1";
import ProjectsSection2 from "@/components/projects/Section2";
import Modal from "@/components/core/Modal";
import GalleryImageView from "@/components/common/GalleryImageView";

const ProjectDetails = ({ params, searchParams }) => {
  return (
    <>
      <PageBox>
        <Suspense fallback={<div>Loading...</div>}>
          <ProjectsSection1 />
          <ProjectsSection2 />
        </Suspense>
      </PageBox>

      {!!searchParams.imgSrc && (
        <Modal closeHref={`/projects?id=${searchParams.id}`}>
          <Suspense fallback={<div>Loading...</div>}>
            <GalleryImageView src={searchParams.imgSrc} />
          </Suspense>
        </Modal>
      )}
    </>
  );
};

ProjectDetails.propTypes = {
  params: PropTypes.object.isRequired,
  searchParams: PropTypes.shape({
    imgSrc: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default ProjectDetails;
