import { Octokit } from 'octokit';

const octokit = new Octokit({
    auth: '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'
})

export const getIssues = async (page = 1, perPage = 10) => {
    
    const response = await octokit.request("GET /repos/{owner}/{repo}/issues", {
        owner: "facebook",
        repo: "react",
        page: page,
        per_page: perPage,
        state: 'all'
    });
    // console.log(response.data);
    return response.data;
};

export const getSingleIssues = async ({ issueNumber }) => {

    const response = await octokit.request('GET /repos/{owner}/{repo}/issues/{issue_number}', {
        owner: "facebook",
        repo: "react",
        issue_number: issueNumber,

    })
    console.log(response.data);
    return response.data;
}