import React, { useEffect, useState } from 'react'
import { getSingleIssues } from '../componets/api';
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom';

const IssuePage = () => {
    const issueNumber = useParams();
    const [singleIssues, setSingleIssues] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchIssues = async () => {
            setLoading(true)
            const issuesData = await getSingleIssues(issueNumber);
            console.log("issuesData", issuesData);
            setSingleIssues(issuesData);
            setLoading(false)
        };
        fetchIssues();
        // eslint-disable-next-line
    }, []);

    return (
        loading ? <div>Loading...</div> :
            <div className='single-issue'>
                <h2 style={{ 'fontSize': '28px', "fontWeight": "500" }}>{singleIssues.title} <span style={{ 'fontWeight': '300', 'color': 'grey' }}>#{singleIssues.number}</span></h2>
                <div style={{ 'display': "flex", "alignItems": 'center' }}>
                    <div className="state" style={{ 'background': singleIssues.state === 'open' ? 'green' : '#8250df' }}>
                        {singleIssues.state === 'open' ?
                            <svg class="open" style={{ 'color': "green" }} viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path></svg>
                            :
                            <svg class="closed" style={{ 'color': "purple" }} viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M11.28 6.78a.75.75 0 0 0-1.06-1.06L7.25 8.69 5.78 7.22a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l3.5-3.5Z"></path><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-1.5 0a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Z"></path></svg>
                        }
                        <span>{singleIssues.state}</span></div>
                    <p>
                        <a href={singleIssues.user?.html_url} >{singleIssues?.user?.login}</a> opened this issue</p>
                </div>
                <div className='desc'>
                    <img src={singleIssues.user?.avatar_url} alt="avatar" />
                    <div>
                        <p className='comments'><a href={singleIssues.user?.html_url} >{singleIssues?.user?.login}</a> commented</p>
                        <ReactMarkdown className='issue-body'>{singleIssues.body}</ReactMarkdown>
                    </div>
                </div>
            </div>
    );
}

export default IssuePage