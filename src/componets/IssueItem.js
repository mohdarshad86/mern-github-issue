import React from 'react';
import { Link } from 'react-router-dom'

const IssueItem = ({ issue }) => {
    return (
        <div className="issue">
            {issue.state === 'open' ?
                <svg className="open" style={{ 'color': "green" }} viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path></svg>
                :
                <svg className="closed" style={{ 'color': "purple" }} viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M11.28 6.78a.75.75 0 0 0-1.06-1.06L7.25 8.69 5.78 7.22a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l3.5-3.5Z"></path><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-1.5 0a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Z"></path></svg>
            }
            <div>
                <p className='issue-title'>
                    <Link to={'/issue/' + issue.number}>{issue.title}</Link>
                </p>
                {issue.labels.length !== 0 &&
                    <ul className='labels'>
                        {issue.labels.map((label) => (
                            <li key={label.id} style={{
                                'color': `#${label.color}`,
                                'backgroundColor': `#${label.color}11`,
                                'border': `1px solid #${label.color}`
                            }}>
                                {label.name}
                            </li>
                        ))}
                    </ul>}
                <span className='issue-by'>Issue #{issue.number} by <a href={issue.user?.html_url} >{issue?.user?.login}</a></span>
            </div>
        </div>
    );
};

export default IssueItem;