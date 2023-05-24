function renderLicenseBadge(license)
{
	if(license != "None")
		return `![code license](https://img.shields.io/badge/license-${license}-blue.svg)`;
	return "";
}

function renderLicenseLink(license)
{
	if(license != "None")
		return `\n* [license](#license)\n`;
	return "";
}

function renderLicenseSection(license) 
{
	if(license != "None")
		return `## License

This project is licensed under the ${license} license.`;
	return "";
}

function engyUnder( exists, engy )
{
	if(!exists)
		return "";
	return `Engineer: ${engy}`;
}

function generateHTML(data)
{
	return `<h1>Manager: ${data.manager}</h1>
<p>${data.managerId}</p>
<p>${data.managerEmail}</p>
<p>${data.managerOfficeNumber}</p>
<p>${engyUnder(data.existsEngineer, data.engy)}</p>
		
`;
}

module.exports = generateHTML;

//${data.desc}
