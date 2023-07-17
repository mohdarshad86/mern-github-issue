import React, { useEffect, useState } from 'react'
import IssueList from '../componets/IssueList'
import { getIssues } from '../componets/api';

export const HomePage = () => {
  const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const perPage = 10;

  useEffect(() => {
    const fetchIssues = async () => {
      setLoading(true);
      const issuesData = await getIssues(page, perPage);
      setIssues(issuesData);
      setLoading(false);
    };

    fetchIssues();
  }, [page]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };
  return (
    loading ? <div>Loading...</div> :
      <div className="Page">
        <h1>GitHub Issues</h1>
        <IssueList issues={issues} />
        <div className="btns">
          <button onClick={handlePrevPage} className={page !== 1 ? '' : 'non-active'}>Previous Page</button>
          <button onClick={handleNextPage}>Next Page</button>
        </div>
      </div>
  )
}
