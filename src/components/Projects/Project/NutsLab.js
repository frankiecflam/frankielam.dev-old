import ProjectItem from "../ProjectItem";
import { NutsLabMockUp } from "../../../assets/Images/index";
import { NutsLabGitHubURL, NutsLabURL } from "../../../utils/constants/index";

const NutsLab = () => {
  return (
    <ProjectItem
      imageSrc={NutsLabMockUp}
      date="jul 2022"
      title="Nuts Lab — e-commerce app"
      githubURL={NutsLabGitHubURL}
      websiteURL={NutsLabURL}
      builtWith="React, NextJS, TypeScript and Firebase"
    />
  );
};

export default NutsLab;
