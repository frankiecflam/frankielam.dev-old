import ProjectItem from "../ProjectItem";
import { HiddenGemsMockUp } from "../../../assets/Images/index";
import {
  HiddenGemsGitHubURL,
  HiddenGemsURL,
} from "../../../utils/constants/index";

const HiddenGems = () => {
  return (
    <ProjectItem
      imageSrc={HiddenGemsMockUp}
      date="jun 2022"
      title="Hidden Gems — social media app"
      githubURL={HiddenGemsGitHubURL}
      websiteURL={HiddenGemsURL}
      builtWith="React, NextJS and Firebase"
    />
  );
};

export default HiddenGems;
