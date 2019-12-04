// @flow
import { useStaticQuery, graphql } from 'gatsby';

const useSearchList = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query SearchListQuery {
        allMarkdownRemark(
          filter: { 
            frontmatter: { 
              template: { eq: "post" }, 
              draft: { ne: true } 
            } 
          }
        ) {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
        }
      }
    `
  );

  return allMarkdownRemark.group;
};

export default useSearchList;
