var usagesModule = (function () {
    const metrics_aws = ["s3", "ec2", "rds", "cost"]
    const metrics_azure = ["vm", "storage", "account", "cost"]
    const regions = ["east", "north", "ouest", "south"]
    const departments = ["GTS", "BSC", "ITIM"]
    const environments = ["PRD", "DEV", "HML"]

    let metriclist = document.getElementById("metrics");
    let regionlist = document.getElementById("regions");
    let departmentlist = document.getElementById("departments");
    let environmentlist = document.getElementById("environments");

    let init = function () {
        populateSelect(metrics_aws, metriclist)
        populateSelect(regions, regionlist)
        populateSelect(departments, departmentlist)
        populateSelect(environments, environmentlist)
    }

    let populateSelect = function (options, elementList) {
        for (let option in options) {
            var optionEl = document.createElement("option");
            optionEl.text = options[option];
            elementList.add(optionEl);
        }
    }

    let refreshSelect = function (csp) {
        metriclist.innerHTML = ""
        if (csp === "aws") {
            populateSelect(metrics_aws, metriclist)
        } else {
            populateSelect(metrics_azure, metriclist)
        }
    }

    let getUsages = function () {


        getGitHubRepo(variables)
            .then(res =>
                res.json()
            )
            .then(res => {
                draw_table()
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

    function drawTable() {
        var array = [["S3", "N/A", "144", "MegaBytes"], ["Cost", "N/A", "144", "USD"], ["Ec2", "40", "N/A", "N/A"]]
        var arrayHead = ["type", "count", "consumed", "unit"]
        let form3 = document.getElementById('form-3')
        let caption = document.createElement("caption")
        caption.innerHTML = "last update : 2018-10-29"
        let trhead = document.createElement("tr")

        let thead = document.createElement("thead")
        thead.appendChild(trhead)
        let tbody = document.createElement("tbody")

        let table = document.createElement('table')
        table.classList.add("table", "table-striped")
        table.appendChild(caption)
        table.appendChild(thead)
        table.appendChild(tbody)

        form3.innerHTML = ''
        form3.appendChild(table)

        for (var i = 0; i < arrayHead.length; i++) {
            var th = document.createElement('th')
            th.innerHTML = arrayHead[i]
            trhead.appendChild(th)
        }
        for (var i = 0; i < array.length; i++) {
            let tr = document.createElement("tr")
            tbody.appendChild(tr)

            for (var j = 0; j < array[i].length; j++) {
                var tdElement = document.createElement('td')
                tdElement.innerHTML = array[i][j]
                tr.appendChild(tdElement)
            }
        }
    }

    return {
        getUsages: getUsages,
        init: init,
        drawTable: drawTable,
        refreshSelect: refreshSelect
    };
})();