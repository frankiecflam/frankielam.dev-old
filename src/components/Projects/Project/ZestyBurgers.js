import ProjectItem from "../ProjectItem";
import { ZestyBurgersMockup } from "../../../assets/Images/index";
import {
  ZestyBurgersGitHubURL,
  ZestyBurgersURL,
} from "../../../utils/constants/index";

const ZestyBurgers = () => {
  return (
    <ProjectItem
      imageSrc={ZestyBurgersMockup}
      date="may 2022"
      title="Zesty Burgers — food ordering app"
      githubURL={ZestyBurgersGitHubURL}
      websiteURL={ZestyBurgersURL}
      builtWith="React, Redux, React Router, React Query, Firebase, CSS, Jest and Git"
    />
  );
};

export default ZestyBurgers;
