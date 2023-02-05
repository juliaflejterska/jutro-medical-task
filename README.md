<h1> <i> Jutro Medical recruitment task </i> </h1>

<h3> https://jutro-medical-task.vercel.app/ </h3>

---

Simple <b> Next.js with TypeScript </b> application.

---

Application has 4 pages:

<ul>
<li><b>/</b> - homepage which contains 2 links redirecting to page with list of countries or to your profile page;</li>
<li><b>/countries</b> - where all available countries are fetched and listed, so you can select one and move to its subpage; </li>
<li><b>/countres/:code</b> - which retrieves information about the selected country; </li>
<li><b>/profile</b> - where basic information about Poland (as it is your profile's country) is displayed. Clicking on a tile takes you to a subpage with more details.</li>
</ul>

---

Data is fetched from the GraphQL API at https://countries.trevorblades.com.
