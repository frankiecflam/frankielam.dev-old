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
      builtWith="React, NextJS, TypeScript, React Query, Firebase, CSS and Git"
    />
  );
};

export default NutsLab;
