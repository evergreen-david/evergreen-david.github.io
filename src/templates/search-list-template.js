// @flow
import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata, useSearchList } from '../hooks';

const SearchListTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const searches = useSearchList();

  return (
    <Layout title={`Search - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Categories">
        <ul>
          {searches.map((search) => (
            <li key={search.fieldValue}>
              <Link to={`/search/${kebabCase(search.fieldValue)}/`}>
                {search.fieldValue} ({search.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  );
};

export default SearchListTemplate;
