import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import TextGridOne from "../../wrappers/text-grid/TextGridOne";
import TeamMemberOne from "../../wrappers/team-member/TeamMemberOne";
import { multilanguage } from "redux-multilanguage";

const About = ({ location , strings}) => {

  return (
    <Fragment>
      <MetaTags>
        <title>Kureghor | About us</title>
        <meta
          name="description"
          content="About page of Kureghor Purchase your desire products."
        />
      </MetaTags>
      <LayoutOne headerTop="visible">

        {/* section title with text */}
        <SectionTitleWithText spaceTopClass="pt-100" spaceBottomClass="pb-95" />

        {/* banner */}
        {/* <BannerOne spaceBottomClass="pb-70" /> */}

        {/* text grid */}
        <TextGridOne spaceBottomClass="pb-70" />

        {/* fun fact */}
        {/* <FunFactOne
          spaceTopClass="pt-100"
          spaceBottomClass="pb-70"
          bgClass="bg-gray-3"
        /> */}

        {/* team member */}
        <TeamMemberOne spaceTopClass="pt-95" spaceBottomClass="pb-70" />

        {/* brand logo slider */}
        {/* <BrandLogoSliderOne spaceBottomClass="pb-70" /> */}
      </LayoutOne>
    </Fragment>
  );
};

About.propTypes = {
  location: PropTypes.object,
  strings: PropTypes.object
};

export default multilanguage(About);
