import ProjectItem from "../ProjectItem";
import { HiddenGemsTSMockUp } from "../../../assets/Images/index";
import {
  HiddenGemsTSGitHubURL,
  HiddenGemsTSURL,
} from "../../../utils/constants/index";

const HiddenGemsTS = () => {
  return (
    <ProjectItem
      imageSrc={HiddenGemsTSMockUp}
      date="oct 2022"
      title="Hidden Gems — social media app"
      githubURL={HiddenGemsTSGitHubURL}
      websiteURL={HiddenGemsTSURL}
      builtWith="React, NextJS, TypeScript, React Query and Firebase"
      rebuild={true}
    />
  );
};

export default HiddenGemsTS;
