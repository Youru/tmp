var usagesModule = (function () {


    let init = function () {

    }

    let getUsages = function () {
        // var queryToSelect = document.getElementById("query-list").value;


        getGitHubRepo(variables)
            .then(res =>
                res.json()
            )
            .then(res => {
                // content = document.getElementById("content-json");
                // content.innerHTML = JSON.stringify(res.data, undefined, 2);
            }
            );
    }

    function getMetrics(token, variables) {
        return fetch(githubUrl,
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
                body: JSON.stringify({ variables })
            }
        )
    }

    return {
        getUsages: getUsages,
        init: init
    };
})();