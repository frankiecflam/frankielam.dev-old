import ProjectItem from "../ProjectItem";
import { BookmarkMockUp } from "../../../assets/Images/index";
import { BookmarkGitHubURL, BookmarkURL } from "../../../utils/constants/index";

const Bookmark = () => {
  return (
    <ProjectItem
      imageSrc={BookmarkMockUp}
      date="mar 2022"
      title="Bookmark — responsive landing page"
      githubURL={BookmarkGitHubURL}
      websiteURL={BookmarkURL}
      builtWith="HTML, Bootstrap 5 and JavaScript"
    />
  );
};

export default Bookmark;
