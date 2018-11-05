import { h } from 'preact';
import s from './style.scss';

export default function Home({redux}) {
	return <div className={s.root}>
		<div><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSI0NCAtOSAxMzUgNjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgNDQgLTkgMTM1IDY2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRTYwMDEyO30NCgkuc3Qxe2ZpbGw6IzZGQkEyQzt9DQoJLnN0MntmaWxsOiNGRkZGRkY7fQ0KCS5zdDN7b3BhY2l0eTowLjg7ZmlsbDojRkZGRkZGO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7fQ0KPC9zdHlsZT4NCjxnPg0KCTxnPg0KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTc4LDMuOGMwLjMtMS41LTAuNy0yLjctMi4yLTIuN0w2OS42LDFjLTkuOSwwLTE5LjUsOC4xLTIxLjIsMTguMWwtMi45LDE2LjdjLTAuMSwwLjcsMCwxLjQsMC40LDINCgkJCWMwLjUsMC42LDEuNCwwLjksMi4zLDAuN2MxMi42LTIuNSwyMy42LTMuNiwzNS43LTMuNWMyMS42LDAsNDMsNC41LDU1LjEsNC42YzEwLjgsMC4xLDE4LjctMS40LDI0LjYtNS4zDQoJCQljOS44LTYuNywxMS43LTE1LjIsMTMuNS0yNC42TDE3OCwzLjh6Ii8+DQoJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xNjUuOSwzNS40Yy0wLjQsMC4zLTAuOCwwLjYtMS4yLDAuOWMtNiw0LjEtMTMuOCw1LjktMjUuMyw1LjlsLTEuMSwwYy01LjItMC4xLTExLjktMC45LTE5LjctMS44DQoJCQljLTEwLjgtMS4zLTIyLjktMi44LTM1LjQtMi44SDgzYy0xMiwwLTIyLjgsMS4xLTM0LjksMy41Yy0wLjMsMC4xLTAuNiwwLjEtMC45LDAuMWMxMC0xLjIsMTguNi0xLDI3LjQtMC41DQoJCQljMjAuMiwxLjIsNDIuNyw2LjgsNjAuMiw2LjNDMTUyLjQsNDYuNCwxNjIuMywzOS42LDE2NS45LDM1LjQiLz4NCgkJPGc+DQoJCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNjcuNSwyMC41Yy0wLjcsMC0xLjMsMC40LTEuNiwxLjFsLTMuNCw3LjVoMS4xaDBjMC42LDAsMS4zLTAuNCwxLjYtMS4xbDMuNC03LjVINjcuNUw2Ny41LDIwLjV6Ii8+DQoJCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNzQuMSwxOC4zTDc0LjEsMTguM2MtMC43LDAtMS4zLDAuNC0xLjYsMS4xbC00LjQsOS43aDEuMWgwYzAuNiwwLDEuMy0wLjQsMS42LTEuMWw0LjQtOS43DQoJCQkJQzc1LjIsMTguMyw3NC4xLDE4LjMsNzQuMSwxOC4zeiIvPg0KCQkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTc4LjcsMTguM0w3OC43LDE4LjNjLTAuNywwLTEuMywwLjQtMS42LDEuMWwtNC40LDkuN2gxLjFoMGMwLjcsMCwxLjMtMC40LDEuNi0xLjFsNC40LTkuNw0KCQkJCUM3OS45LDE4LjMsNzguNywxOC4zLDc4LjcsMTguM3oiLz4NCgkJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik04Mi43LDE0LjVINzVsOC4xLTMuNWwwLDBjMC42LTAuMiwxLjEtMC42LDEuNS0xLjFjMC42LTAuNiwxLTEuMywxLjItMi4xYzAtMC4xLDAtMC4xLDAtMC4yaDBINzIuMw0KCQkJCWwtMC40LDIuM0g4MWwtMTAsNC40bC0wLjQsMi41aDExLjdjMC40LDAsMC43LDAuMywwLjYsMC44TDgxLjQsMjZjLTAuMSwwLjQtMC41LDAuOC0wLjksMC44aC0yLjRsLTEsMi4zbDAsMGgzDQoJCQkJYzEuNywwLDMuMy0xLjQsMy42LTNsMS41LTguNUM4NS41LDE1LjksODQuMywxNC41LDgyLjcsMTQuNSIvPg0KCQkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTY3LjEsMTEuNGMwLjMsMC41LDAuOSwwLjgsMS41LDAuOGgwaDEuMmwtMS4zLTMuNWMwLTAuMS0wLjEtMC4yLTAuMS0wLjNjLTAuMy0wLjUtMC45LTAuOC0xLjUtMC44aDBoLTEuMg0KCQkJCWwxLjMsMy41QzY3LDExLjIsNjcsMTEuMyw2Ny4xLDExLjQiLz4NCgkJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik02NS45LDE3LjVjMC4zLDAuNSwwLjksMC44LDEuNSwwLjhoMGgxLjJMNjcuNCwxNWMwLTAuMS0wLjEtMC4yLTAuMS0wLjNjLTAuMy0wLjUtMC45LTAuOC0xLjYtMC44aDBoLTEuMg0KCQkJCWwxLjMsMy40QzY1LjgsMTcuMyw2NS44LDE3LjQsNjUuOSwxNy41Ii8+DQoJCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTEwLjYsOC43TDExMC42LDguN2wwLjYtMS4xSDkyLjdjLTAuOSwwLTEuNywwLjctMS45LDEuNmwtMi45LDE2LjdjLTAuMywxLjcsMC44LDMsMi41LDNsMTQuOSwwaDANCgkJCQljMC4yLDAsMC40LDAsMC42LTAuMWMwLjYtMC4yLDEuMS0wLjYsMS40LTEuMXYwbDAuNi0xLjFoLTguNGwwLjYtMy42aDUuMmMxLjcsMCwzLjMtMS40LDMuNi0zbDEtNS42YzAuMS0wLjUtMC4zLTEtMC44LTFoLTcuMw0KCQkJCWwwLjYtMy42aDMuNmwyLjUsMHYwYzAuMiwwLDAuNCwwLDAuNi0wLjFDMTA5LjgsOS43LDExMC4zLDkuMywxMTAuNiw4LjcgTTkyLjksOS45aDcuMmwtMC42LDMuNmgtNy4yTDkyLjksOS45eiBNOTcuMiwyNi43aC02LjQNCgkJCQljLTAuNCwwLTAuNy0wLjQtMC42LTAuOGwwLjUtMi44aDcuMkw5Ny4yLDI2Ljd6IE0xMDcuNCwxNS44bC0wLjgsNC40Yy0wLjEsMC40LTAuNSwwLjgtMC45LDAuOEg5MWwwLjktNS4xTDEwNy40LDE1LjgNCgkJCQlMMTA3LjQsMTUuOHoiLz4NCgkJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMzMuMywxMS4yYzAuMSwwLDAuMiwwLDAuMy0wLjFjMC42LTAuMiwxLjEtMC42LDEuNC0xLjFsMCwwbDAuNi0xLjFoLTYuNmwwLjktMS43bC0xLjIsMGgwDQoJCQkJYy0wLjYsMC0xLjEsMC4zLTEuNSwwLjlsMCwwbC0wLjQsMC44aC02LjhsLTAuNCwyLjNoMS45bDAuNCw0LjNoLTMuOWwtMC40LDIuM2gxNS4ybDAsMGMwLjIsMCwwLjQsMCwwLjYtMC4xDQoJCQkJYzAuNi0wLjIsMS4xLTAuNiwxLjQtMS4xbDAsMGwwLjYtMS4xbC0zLjksMEwxMzMuMywxMS4yeiBNMTI5LjIsMTUuNWgtNS4zbC0wLjQtNC4zbDcuNiwwTDEyOS4yLDE1LjV6Ii8+DQoJCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTE3LjgsNy41QzExNy44LDcuNSwxMTcuOCw3LjYsMTE3LjgsNy41Yy0wLjYsMC0xLjIsMC40LTEuNSwwLjlsMCwwbC0xLjYsM2wtMi41LDQuN2gxLjJoMA0KCQkJCWMwLjEsMCwwLjIsMCwwLjQtMC4xbC0yLjMsMTNoMi4zbDMuMS0xNy43bDItMy44TDExNy44LDcuNUwxMTcuOCw3LjVMMTE3LjgsNy41eiIvPg0KCQkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTE0Mi45LDcuNUwxNDIuOSw3LjVDMTQyLjgsNy41LDE0Mi44LDcuNiwxNDIuOSw3LjVjLTAuNiwwLTEuMiwwLjQtMS41LDAuOWwwLDBsLTEuNiwzbC0yLjUsNC43aDEuM2gwDQoJCQkJYzAuMSwwLDAuMiwwLDAuNC0wLjFsLTIuMywxM2gyLjNsMy4xLTE3LjdsMi0zLjhMMTQyLjksNy41TDE0Mi45LDcuNXoiLz4NCgkJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMzIuMSwxOS43aC0xMy41bC0xLjYsOS4zaDExLjRjMS43LDAsMy4zLTEuNCwzLjYtM2wwLjktNS4zQzEzMywyMC4xLDEzMi42LDE5LjcsMTMyLjEsMTkuNyBNMTI5LjcsMjUuOQ0KCQkJCWMtMC4xLDAuNC0wLjUsMC44LTAuOSwwLjhoLTkuMmwwLjgtNC44aDkuOUwxMjkuNywyNS45eiIvPg0KCQkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTE1OS4xLDEyLjFsMC41LTIuOGMwLjEtMC40LTAuMi0wLjgtMC42LTAuOGgtMy4ybDAuMi0xaC0ybC0wLjIsMWgtMi45bC0wLjMsMS43aDIuOWwtMC4zLDEuOGgtMy4zDQoJCQkJbC0wLjMsMS43aDMuM2wtMC4zLDEuOGgtMi45bC0wLjMsMS43aDIuOWwtMC4zLDEuOGgtMy4zbC0wLjMsMS43aDMuM2wtMC4zLDEuOEgxNDhsLTAuMywxLjdoMy4zbC0wLjQsMi40aC0zLjFsMCwwDQoJCQkJYy0wLjYsMC0xLjEtMC4zLTEuMy0wLjdsLTEuNC0yLjJsMy02LjJsMC4zLTEuOEgxNDVsNC4yLTYuMmwwLjItMS4zaC00LjhsLTAuNCwyaDIuMmwtMy42LDUuM2wtMC40LDIuM2gzbC0yLDRIMTQxbDEuNCwyLjMNCgkJCQlsLTIuMyw0LjhoMi4xbDEuNC0yLjhsMC41LDAuOGMwLjcsMS4xLDEuOSwxLjgsMy41LDEuOGgwaDBoOC4ybDAsMGMwLjUsMCwxLTAuNCwxLjEtMC45bDAuMi0xLjFoLTQuNmwwLjQtMi40aDIuOGwwLDANCgkJCQljMC4yLDAsMC4zLDAsMC41LTAuMWMwLjQtMC4xLDAuOC0wLjQsMS4xLTAuOGwwLDBsMC41LTAuOGgtNC41bDAuMy0xLjhoMi40djBjMC4yLDAsMC4zLDAsMC41LTAuMWMwLjQtMC4xLDAuOC0wLjQsMS4xLTAuOGwwLDANCgkJCQlsMC41LTAuOGgtNC4xbDAuMy0xLjhoMS4yYzEuNSwwLDMtMS4yLDMuMy0yLjhsMC4xLTAuOGMwLjEsMCwwLjIsMCwwLjMsMGMwLjQtMC4xLDAuOC0wLjQsMS4xLTAuOHYwbDAuNS0wLjhMMTU5LjEsMTIuMQ0KCQkJCUwxNTkuMSwxMi4xeiBNMTU2LjksMTQuNmMtMC4xLDAuNi0wLjYsMS0xLjIsMWgtMS4ybDAuMy0xLjhoMi4yTDE1Ni45LDE0LjZ6IE0xNTcuMywxMi4xaC0yLjJsMC4zLTEuOGgyLjJMMTU3LjMsMTIuMXoiLz4NCgkJPC9nPg0KCQk8cGF0aCBjbGFzcz0ic3QzIiBkPSJNMTQ2LjcsMzYuMmwwLjEtMC44aDAuMmwtMC4xLDAuOEgxNDYuN0wxNDYuNywzNi4yeiBNMTQ3LjMsMzJoMS40bDAsMGwtMC42LDQuMmgxLjFsMC42LTQuMmgxLjZsMC4xLTAuOQ0KCQkJaC00LjJMMTQ3LjMsMzJMMTQ3LjMsMzJ6IE0xNTIuMSwzMy4xTDE1Mi4xLDMzLjFoMC4zbDAuMy0yaDEuMWwtMC4zLDJoMmwwLjMtMmgxLjFsLTAuNyw1SDE1NWwwLjMtMi4xaC0ybC0wLjMsMi4xaC0xLjFsMC4zLTIuMQ0KCQkJSDE1MmMtMC4zLDAtMC40LTAuMi0wLjQtMC41QzE1MS42LDMzLjMsMTUxLjgsMzMuMSwxNTIuMSwzMy4xeiBNMTQ3LjQsMzEuMmwtMC4xLDAuOWgtMC4ybDAuMS0wLjlMMTQ3LjQsMzEuMkwxNDcuNCwzMS4yeg0KCQkJIE0xNDYuOCwzNS40aC0xLjJjLTAuNiwwLTEtMC4zLTAuOS0wLjlsMC41LTMuM2gtMS4xbC0wLjUsMy4zYy0wLjIsMS4xLDAuNSwxLjcsMS43LDEuN2wwLDBoMS4zTDE0Ni44LDM1LjRMMTQ2LjgsMzUuNHoNCgkJCSBNMTQwLjIsMzRsMC4xLTAuOWgwLjdsLTAuMS0wLjhjMC0wLjEtMC4xLTAuMi0wLjItMC4yaC0wLjNsMC4xLTFoMC40YzAuNCwwLDAuOSwwLjMsMC45LDAuN2wwLjcsNC4zaC0xLjJsLTAuMy0yLjJMMTQwLjIsMzQNCgkJCUwxNDAuMiwzNHogTTExNi4xLDMzLjJoMC40YzAuMiwwLDAuNC0wLjEsMC42LTAuMWMwLjEtMC4xLDAuMi0wLjIsMC4yLTAuNGMwLTAuMiwwLTAuMy0wLjEtMC40Yy0wLjEtMC4xLTAuMy0wLjEtMC41LTAuMWgtMC40DQoJCQlsMC4xLTAuOWgwLjRjMC4zLDAsMC42LDAsMC44LDAuMWMwLjIsMCwwLjQsMC4xLDAuNSwwLjJjMC4yLDAuMSwwLjMsMC4zLDAuNCwwLjRjMC4xLDAuMiwwLjEsMC40LDAuMSwwLjZjMCwwLjMtMC4xLDAuNS0wLjMsMC43DQoJCQljLTAuMiwwLjItMC40LDAuNC0wLjYsMC41YzAuMiwwLjEsMC40LDAuMywwLjUsMC40YzAuMSwwLjIsMC4xLDAuNCwwLjEsMC43Yy0wLjEsMC41LTAuMiwwLjgtMC42LDFjLTAuMywwLjItMC43LDAuMy0xLjMsMC4zDQoJCQloLTAuNmwwLjEtMC45aDAuNGMwLjIsMCwwLjQsMCwwLjUtMC4xYzAuMS0wLjEsMC4yLTAuMiwwLjItMC40YzAtMC4yLDAtMC40LTAuMS0wLjVjLTAuMS0wLjEtMC4zLTAuMS0wLjUtMC4xYy0wLjIsMC0wLjMsMC0wLjQsMA0KCQkJTDExNi4xLDMzLjJMMTE2LjEsMzMuMnogTTE0MC42LDMxLjJsLTAuMSwxaC0wLjNjLTAuMSwwLTAuMiwwLjEtMC4yLDAuMmwtMC40LDAuOGwwLDBoMC43bC0wLjEsMC45aC0xbC0wLjksMi4yaC0xLjFsMS0yLjJoLTAuMQ0KCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjRjMC0wLjIsMC4zLTAuNCwwLjUtMC40bDAsMGgwLjNsMC42LTEuM2MwLjItMC40LDAuNy0wLjcsMS4xLTAuN0wxNDAuNiwzMS4yTDE0MC42LDMxLjJ6IE0xMzIuNywzMy4yDQoJCQlMMTMyLjcsMzMuMmgwLjFsMC4xLTAuNmMwLjEtMC45LDAuOC0xLjQsMS43LTEuNGgyLjVMMTM3LDMyaC0yLjJjLTAuNSwwLTAuNywwLjMtMC45LDAuOGwtMC4xLDAuNGgzbC0wLjEsMC45aC0yLjhsMCwwaC0wLjINCgkJCWwtMC4xLDAuNWMtMC4xLDAuNiwwLjIsMC44LDAuOCwwLjhoMi4xbC0wLjEsMC45SDEzNGMtMC45LDAtMS41LTAuNS0xLjMtMS41bDAuMS0wLjZoLTAuMWMtMC4yLDAtMC40LTAuMi0wLjQtMC40DQoJCQlDMTMyLjMsMzMuNCwxMzIuNSwzMy4yLDEzMi43LDMzLjJMMTMyLjcsMzMuMnogTTEyNC40LDMzLjFMMTI0LjQsMzMuMWgxLjRsLTAuMSwxaC0xLjVjLTAuMywwLTAuNS0wLjItMC40LTAuNQ0KCQkJQzEyMy45LDMzLjMsMTI0LjEsMzMuMSwxMjQuNCwzMy4xTDEyNC40LDMzLjF6IE0xMjcuMiwzMy4xTDEyNy4yLDMzLjFoMC4xbDAuMy0yaDEuMWwtMC4zLDJoMmwwLjMtMmgxLjFsLTAuNyw1aC0xLjFsMC4zLTIuMWgtMg0KCQkJbC0wLjMsMi4xaC0xLjFsMC4zLTIuMWgtMC4xYy0wLjMsMC0wLjQtMC4yLTAuNC0wLjVDMTI2LjcsMzMuMywxMjcsMzMuMSwxMjcuMiwzMy4xTDEyNy4yLDMzLjF6IE0xMTksMzEuMkwxMTksMzEuMmgxLjJsMSwxLjkNCgkJCWwxLjUtMS45aDEuMmwtMi4zLDIuOGwtMC4zLDIuMmgtMS4xbDAuMy0yLjJMMTE5LDMxLjJ6IE0xMTUuMSwzMi4xbC0wLjIsMS4yaDBoMGgwaDBsMCwwaDFsLTAuMSwwLjljLTAuNCwwLTAuOCwwLTEuMSwwbDAsMA0KCQkJbC0wLjIsMS4yaDEuMWwtMC4xLDAuOWgtMi4ybDAuMy0yLjFoLTAuMWMtMC4yLDAtMC40LTAuMi0wLjQtMC40YzAtMC4yLDAuMy0wLjQsMC41LTAuNGwwLDBoMC4xbDAuMy0yLjFoMi4ybC0wLjEsMC45TDExNS4xLDMyLjENCgkJCUwxMTUuMSwzMi4xeiIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K" /></div>
		{redux}
	</div>;
}
