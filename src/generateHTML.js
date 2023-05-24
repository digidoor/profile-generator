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

function screenShotSection( isScreen, screenName )
{
	if(!isScreen)
		return "";
	return `## Here's what it looks like:
![screenshot](${screenName}?raw=true "demo")`
}

function generateHTML(data)
{
	return "<h1> this is a test</h1>";
}

module.exports = generateHTML;

//${data.desc}
