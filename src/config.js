const appConfigs = {
	APP_NAME: 'CosmeticsStore',
	LIMIT_PAGE: {
		LIST_POST_HOME: 10,
		LIST_POST_TAG: 10,
		LIST_POST_CATEGORY: 10,
		LIST_POST_USER: 10,
		LIST_POST_FAVORITED: 10,
		LIST_TAG: 20,
		LIST_CATEGORY: 20,
		LIST_COMMENT: 10
	},
	REQUEST: {
		TIMEOUT: 30000
	},
	IMAGES: {
		DEFAULT_IMAGE_SOURCE:
			'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIxMDAlIiBpZD0ic3ZnMjc5MyIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjEwMCUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzIGlkPSJkZWZzMjc5NyIvPjxnIGlkPSJfMzUtTG9hZGluZyIgc3R5bGU9ImRpc3BsYXk6aW5saW5lIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDA5NiwtNjE0NCkiPjxnIGlkPSJnMjAyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDM3MC4yOCw2MTkyLjI5KSI+PHBhdGggZD0ibSAwLDU2LjM5OCBjIDAsNC44OTIgLTEuODk5LDkuNDgyIC01LjM1NSwxMi45MzQgLTMuNDU3LDMuNDU1IC04LjA0Niw1LjM1NyAtMTIuOTI1LDUuMzU3IC00LjgxNSwwIC05LjUzLC0xLjk1MyAtMTIuOTM0LC01LjM1NiAtMy40MDQsLTMuNDA1IC01LjM1NiwtOC4xMiAtNS4zNTYsLTEyLjkzNSBWIC0wLjAxMSBjIDAsLTQuODA5IDEuOTUyLC05LjUyIDUuMzU2LC0xMi45MjQgMy40MDQsLTMuNDA0IDguMTE4LC01LjM1NiAxMi45MzQsLTUuMzU2IDQuODgsMCA5LjQ2OSwxLjkwMiAxMi45MzEsNS4zNjUgMy40LDMuMzkzIDUuMzQ5LDguMSA1LjM0OSwxMi45MTUgeiBNIC0xOC4yOCwtNDguMjkxIGMgLTEyLjksMCAtMjUuMDI3LDUuMDIyIC0zNC4xNDcsMTQuMTQzIC04Ljk4OCw4Ljk4OCAtMTQuMTQzLDIxLjQzMSAtMTQuMTQzLDM0LjEzNyB2IDU2LjQwOSBjIDAsMTIuOSA1LjAyMiwyNS4wMjcgMTQuMTQ0LDM0LjE0OCA5LjEyMSw5LjEyMSAyMS4yNDgsMTQuMTQzIDM0LjE0NiwxNC4xNDMgMTIuODkxLDAgMjUuMDE0LC01LjAyMiAzNC4xMjksLTE0LjEzNSBDIDI0Ljk3NSw4MS40NDIgMzAsNjkuMzEyIDMwLDU2LjM5OCBWIC0wLjAxMSBDIDMwLC0xMi45MTggMjQuOTc1LC0yNS4wNDQgMTUuODU2LC0zNC4xNDggNi43MzYsLTQzLjI2OSAtNS4zODgsLTQ4LjI5MSAtMTguMjgsLTQ4LjI5MSIgaWQ9InBhdGgyMDIyIiBzdHlsZT0iZmlsbC1ydWxlOm5vbnplcm8iLz48L2c+PGcgaWQ9ImcyMDI4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NDQ2LjA2LDYyNjYuMDQpIj48cGF0aCBkPSJtIDAsMTQuMDQ0IDM5Ljg4OSwtMzkuODkxIGMgMy40MDQsLTMuNDA0IDguMTE4LC01LjM1NiAxMi45MzMsLTUuMzU2IDQuODA5LDAgOS41MiwxLjk1MiAxMi45MjQsNS4zNTYgMy40MDQsMy40MDUgNS4zNTcsOC4xMTYgNS4zNTcsMTIuOTI0IDAsNC44MTYgLTEuOTUzLDkuNTMgLTUuMzU3LDEyLjkzNCBsIC0zOS44OTIsMzkuODkgYyAtMy40NDcsMy40NDggLTguMDM2LDUuMzQ2IC0xMi45MjEsNS4zNDYgLTQuODg2LDAgLTkuNDc2LC0xLjg5OCAtMTIuOTI0LC01LjM0NyAtMC4wMDMsLTAuMDAzIC0wLjAwNiwtMC4wMDYgLTAuMDEsLTAuMDA5IC0zLjQ0OCwtMy40NDkgLTUuMzQ3LC04LjAzOCAtNS4zNDcsLTEyLjkyNCAwLC00Ljg4NiAxLjg5OSwtOS40NzUgNS4zNDgsLTEyLjkyMyBtIC0yMS4yMDksNDcuMDY0IGMgMC4wMDEsMC4wMDIgMC4wMDMsMC4wMDQgMC4wMDUsMC4wMDUgOS4xMTQsOS4xMTUgMjEuMjM3LDE0LjEzNCAzNC4xMzcsMTQuMTM0IDEyLjksMCAyNS4wMjMsLTUuMDE5IDM0LjEzNSwtMTQuMTMzIGwgMzkuODkxLC0zOS44OSBjIDkuMTIxLC05LjEyIDE0LjE0NCwtMjEuMjQ3IDE0LjE0NCwtMzQuMTQ3IDAsLTEyLjcwNiAtNS4xNTYsLTI1LjE0OCAtMTQuMTQ0LC0zNC4xMzcgLTguOTg4LC04Ljk4OCAtMjEuNDMxLC0xNC4xNDMgLTM0LjEzNywtMTQuMTQzIC0xMi44OTksMCAtMjUuMDI2LDUuMDIyIC0zNC4xNDYsMTQuMTQzIGwgLTM5Ljg4OSwzOS44OSBjIC05LjExNSw5LjExMyAtMTQuMTM1LDIxLjIzNiAtMTQuMTM1LDM0LjEzNyAwLDEyLjg5OSA1LjAyLDI1LjAyMiAxNC4xMzQsMzQuMTM3IDEwZS00LDAuMDAyIDAuMDAzLDAuMDAzIDAuMDA1LDAuMDA0IiBpZD0icGF0aDIwMjYiIHN0eWxlPSJmaWxsLXJ1bGU6bm9uemVybyIvPjwvZz48ZyBpZD0iZzIwMzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ1NzIuNjQsNjM4Ny4wOCkiPjxwYXRoIGQ9Im0gMCwyNS44NTggYyAtMy40MDQsMy40MDQgLTguMTE1LDUuMzU2IC0xMi45MjQsNS4zNTYgaCAtNTYuNDA5IGMgLTQuODE1LDAgLTkuNTMsLTEuOTUyIC0xMi45MzQsLTUuMzU1IC0zLjQwNCwtMy40MDUgLTUuMzU3LC04LjEyIC01LjM1NywtMTIuOTM1IDAsLTQuODc4IDEuOTAyLC05LjQ2OCA1LjM2NSwtMTIuOTMxIDMuNDQ0LC0zLjQ0OSA4LjAzNCwtNS4zNDkgMTIuOTI2LC01LjM0OSBoIDU2LjQwOSBjIDQuODE1LDAgOS41MjIsMS45NDkgMTIuOTI0LDUuMzU3IDMuNDU0LDMuNDU0IDUuMzU2LDguMDQ0IDUuMzU2LDEyLjkyMyAwLDQuODE2IC0xLjk1Miw5LjUzIC01LjM1NiwxMi45MzQgTSAyMS4yMjIsLTIxLjIwNSBDIDEyLjEwOSwtMzAuMzMgLTAuMDE3LC0zNS4zNTYgLTEyLjkyNCwtMzUuMzU2IGggLTU2LjQwOSBjIC0xMi45MTQsMCAtMjUuMDQ0LDUuMDI2IC0zNC4xNDgsMTQuMTQ1IC05LjEyMSw5LjEyMSAtMTQuMTQzLDIxLjI0NCAtMTQuMTQzLDM0LjEzNSAwLDEyLjg5OCA1LjAyMiwyNS4wMjUgMTQuMTQ0LDM0LjE0NyA5LjEyLDkuMTIxIDIxLjI0NywxNC4xNDMgMzQuMTQ3LDE0LjE0MyBoIDU2LjQwOSBjIDEyLjcwNiwwIDI1LjE0OSwtNS4xNTUgMzQuMTM3LC0xNC4xNDMgOS4xMjEsLTkuMTIgMTQuMTQzLC0yMS4yNDcgMTQuMTQzLC0zNC4xNDcgMCwtMTIuODkyIC01LjAyMiwtMjUuMDE2IC0xNC4xMzQsLTM0LjEyOSIgaWQ9InBhdGgyMDMwIiBzdHlsZT0iZmlsbC1ydWxlOm5vbnplcm8iLz48L2c+PGcgaWQ9ImcyMDM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NTExLjgsNjQ5NC4wNykiPjxwYXRoIGQ9Im0gMCw2NS43MzggYyAtMC4wOCwwLjA3OSAtMC4xNTgsMC4xNiAtMC4yMzYsMC4yNDEgLTMuMzc4LDMuMjU1IC03Ljk4Myw1LjExNSAtMTIuNjg4LDUuMTE1IC00Ljg5MiwwIC05LjQ4NSwtMS44OTggLTEyLjkzMywtNS4zNDYgbCAtMzkuODksLTM5Ljg5IGMgLTMuNDQ4LC0zLjQ0OCAtNS4zNDcsLTguMDQxIC01LjM0NywtMTIuOTMzIDAsLTQuNzA2IDEuODYxLC05LjMxIDUuMTE1LC0xMi42ODggMC4wODIsLTAuMDc4IDAuMTYzLC0wLjE1NiAwLjI0MiwtMC4yMzYgMy40NTQsLTMuNDU0IDguMDQ0LC01LjM1NyAxMi45MjQsLTUuMzU3IDQuODc5LDAgOS40NjgsMS45MDMgMTIuOTIyLDUuMzU4IEwgMCwzOS44OSBjIDMuNDU0LDMuNDU0IDUuMzU2LDguMDQ0IDUuMzU2LDEyLjkyNCAwLDQuODggLTEuOTAyLDkuNDcgLTUuMzU2LDEyLjkyNCBtIC0xOC42NzcsLTg2Ljk0OSBjIC05LjExOSwtOS4xMjEgLTIxLjI0MywtMTQuMTQ1IC0zNC4xMzYsLTE0LjE0NSAtMTIuNzE0LDAgLTI0LjY4MSw0Ljg4NiAtMzMuNzU3LDEzLjc2OCAtMC4xMzIsMC4xMjIgLTAuMjYyLDAuMjQ4IC0wLjM5LDAuMzc2IC04Ljk4Miw4Ljk4MiAtMTQuMTM0LDIxLjQyNSAtMTQuMTM0LDM0LjEzNyAwLDEyLjkwNSA1LjAyLDI1LjAzMiAxNC4xMzQsMzQuMTQ2IGwgMzkuODksMzkuODkgYyA5LjExNCw5LjExNCAyMS4yNDEsMTQuMTMzIDM0LjE0NiwxNC4xMzMgMTIuNzEyLDAgMjUuMTU0LC01LjE1MSAzNC4xMzcsLTE0LjEzMyAwLjEyOCwtMC4xMjggMC4yNTMsLTAuMjU4IDAuMzc2LC0wLjM5IDguODgyLC05LjA3NiAxMy43NjcsLTIxLjA0MiAxMy43NjcsLTMzLjc1NyAwLC0xMi44OTIgLTUuMDIyLC0yNS4wMTYgLTE0LjE0MywtMzQuMTM3IHoiIGlkPSJwYXRoMjAzNCIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvIi8+PC9nPjxnIGlkPSJnMjA0MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDM3MC4yOCw2NTUxLjMxKSI+PHBhdGggZD0ibSAwLDU2LjQwOSBjIDAsNC44ODUgLTEuODk5LDkuNDcyIC01LjM2NSwxMi45MzIgLTMuNDQ0LDMuNDQ5IC04LjAzMSw1LjM0OCAtMTIuOTE1LDUuMzQ4IC00Ljg5MiwwIC05LjQ4MiwtMS44OTkgLTEyLjkzNCwtNS4zNTYgLTMuNDU0LC0zLjQ1NCAtNS4zNTYsLTguMDQ0IC01LjM1NiwtMTIuOTI0IHYgLTU2LjQxIGMgMCwtNC44OCAxLjkwMiwtOS40NjkgNS4zNjUsLTEyLjkzMSAzLjQ0MywtMy40NDkgOC4wMzMsLTUuMzQ4IDEyLjkyNSwtNS4zNDggNC44ODQsMCA5LjQ3MSwxLjg5OSAxMi45MzIsNS4zNjUgQyAtMS44OTksLTkuNDcyIDAsLTQuODg2IDAsLTAuMDAxIFogTSAtMTguMjgsLTQ4LjI4IGMgLTEyLjkxMywwIC0yNS4wNDMsNS4wMjUgLTM0LjE0NiwxNC4xNDIgLTkuMTIxLDkuMTE5IC0xNC4xNDQsMjEuMjQzIC0xNC4xNDQsMzQuMTM3IHYgNTYuNDEgYyAwLDEyLjg5MyA1LjAyMiwyNS4wMTcgMTQuMTM0LDM0LjEyOSA5LjExMyw5LjEyNiAyMS4yNDMsMTQuMTUxIDM0LjE1NiwxNC4xNTEgMTIuOTA3LDAgMjUuMDMzLC01LjAyNSAzNC4xMjksLTE0LjEzNCBDIDI0Ljk3NSw4MS40NDIgMzAsNjkuMzE2IDMwLDU2LjQwOSBWIC0wLjAwMSBDIDMwLC0xMi45MDkgMjQuOTc0LC0yNS4wMzUgMTUuODY1LC0zNC4xMjkgNi43NTMsLTQzLjI1NSAtNS4zNzMsLTQ4LjI4IC0xOC4yOCwtNDguMjgiIGlkPSJwYXRoMjAzOCIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvIi8+PC9nPjxnIGlkPSJnMjA0NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDI1Ny45Myw2NTMzLjk1KSI+PHBhdGggZD0ibSAwLC0xNC4wMjIgLTM5Ljg5LDM5Ljg5IGMgLTMuNDQ4LDMuNDQ4IC04LjAzOCw1LjM0NiAtMTIuOTIzLDUuMzQ2IC00Ljg4NiwwIC05LjQ3NiwtMS44OTggLTEyLjkyNCwtNS4zNDYgLTAuMDAzLC0wLjAwNCAtMC4wMDYsLTAuMDA3IC0wLjAxLC0wLjAxIC0zLjQ0OCwtMy40NDggLTUuMzQ3LC04LjAzOCAtNS4zNDcsLTEyLjkyNCAwLC00Ljg4NiAxLjg5OSwtOS40NzYgNS4zNDcsLTEyLjkyNCBsIDM5Ljg5LC0zOS44ODkgYyAzLjQwNCwtMy40MDUgOC4xMTgsLTUuMzU3IDEyLjkzMywtNS4zNTcgNC44MDksMCA5LjUyLDEuOTUyIDEyLjkyNCw1LjM1NyAzLjQwNCwzLjQwNCA1LjM1Niw4LjExNSA1LjM1NiwxMi45MjMgMCw0LjgxNiAtMS45NTIsOS41MyAtNS4zNTYsMTIuOTM0IG0gLTEyLjkyNCwtNjEuMjE0IGMgLTEyLjg5OSwwIC0yNS4wMjYsNS4wMjMgLTM0LjE0NiwxNC4xNDQgbCAtMzkuODksMzkuODg5IGMgLTkuMTE0LDkuMTE1IC0xNC4xMzQsMjEuMjM4IC0xNC4xMzQsMzQuMTM3IDAsMTIuODk5IDUuMDIsMjUuMDIzIDE0LjEzNCwzNC4xMzcgbCAwLjAxLDAuMDEgYyA5LjExNCw5LjExNCAyMS4yMzcsMTQuMTMzIDM0LjEzNywxNC4xMzMgMTIuODk5LDAgMjUuMDIyLC01LjAxOSAzNC4xMzYsLTE0LjEzMyBsIDM5Ljg5LC0zOS44OSBjIDkuMTIxLC05LjEyIDE0LjE0MywtMjEuMjQ3IDE0LjE0MywtMzQuMTQ3IDAsLTEyLjcwNiAtNS4xNTUsLTI1LjE0OCAtMTQuMTQzLC0zNC4xMzYgLTguOTg4LC04Ljk4OSAtMjEuNDMxLC0xNC4xNDQgLTM0LjEzNywtMTQuMTQ0IiBpZD0icGF0aDIwNDIiIHN0eWxlPSJmaWxsLXJ1bGU6bm9uemVybyIvPjwvZz48ZyBpZD0iZzIwNDgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQxMzEuMzUsNjM4Ny4wOSkiPjxwYXRoIGQ9Im0gMCwyNS44NCBjIC0zLjQ0OSwtMy40NDMgLTUuMzQ5LC04LjAzMyAtNS4zNDksLTEyLjkyNSAwLC00Ljg4NSAxLjksLTkuNDcxIDUuMzY2LC0xMi45MzEgMy40NDMsLTMuNDUgOC4wMywtNS4zNDkgMTIuOTE1LC01LjM0OSBoIDU2LjQwOSBjIDQuODg2LDAgOS40NzIsMS44OTkgMTIuOTMxLDUuMzY1IDMuNDUsMy40NDQgNS4zNDksOC4wMyA1LjM0OSwxMi45MTUgMCw0Ljg5MiAtMS44OTksOS40ODIgLTUuMzU3LDEyLjkzNSAtMy40NTMsMy40NTMgLTguMDQzLDUuMzU1IC0xMi45MjMsNS4zNTUgSCAxMi45MzIgQyA4LjA1MiwzMS4yMDUgMy40NjIsMjkuMzAzIDAsMjUuODQgbSAxMDMuNDcsMjEuMjMgYyA5LjEyNiwtOS4xMTIgMTQuMTUxLC0yMS4yNDIgMTQuMTUxLC0zNC4xNTUgMCwtMTIuOTA3IC01LjAyNSwtMjUuMDMzIC0xNC4xMzUsLTM0LjEyOCAtOS4xMSwtOS4xMjYgLTIxLjIzNywtMTQuMTUyIC0zNC4xNDUsLTE0LjE1MiBIIDEyLjkzMiBjIC0xMi45MDgsMCAtMjUuMDM0LDUuMDI1IC0zNC4xMjksMTQuMTM1IC05LjEyNiw5LjExMiAtMTQuMTUyLDIxLjIzOCAtMTQuMTUyLDM0LjE0NSAwLDEyLjkxMyA1LjAyNiwyNS4wNDMgMTQuMTQ0LDM0LjE0NyA5LjEyLDkuMTIxIDIxLjI0NCwxNC4xNDMgMzQuMTM3LDE0LjE0MyBoIDU2LjQwOSBjIDEyLjg5NCwwIDI1LjAxOCwtNS4wMjMgMzQuMTI5LC0xNC4xMzUiIGlkPSJwYXRoMjA0NiIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvIi8+PC9nPjxnIGlkPSJnMjA1MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDI1Ny45Myw2MjQwLjIpIj48cGF0aCBkPSJtIDAsNjUuNzM4IGMgLTAuMDgsMC4wNzkgLTAuMTU4LDAuMTYgLTAuMjM2LDAuMjQxIC0zLjM3OCwzLjI1NSAtNy45ODMsNS4xMTUgLTEyLjY4OCw1LjExNSAtNC44OTIsMCAtOS40ODUsLTEuODk4IC0xMi45MzMsLTUuMzQ2IGwgLTM5Ljg5LC0zOS44OSBjIC0zLjQ0OCwtMy40NDggLTUuMzQ3LC04LjA0MSAtNS4zNDcsLTEyLjkzMyAwLC00LjcwNiAxLjg2MSwtOS4zMSA1LjExNSwtMTIuNjg4IDAuMDgyLC0wLjA3NyAwLjE2MywtMC4xNTYgMC4yNDIsLTAuMjM2IDMuNDU0LC0zLjQ1NCA4LjA0NCwtNS4zNTcgMTIuOTI0LC01LjM1NyA0Ljg3OSwwIDkuNDY5LDEuOTAzIDEyLjkyMyw1LjM1NyBMIDAuMDAxLDM5Ljg5MiBjIDMuNDUzLDMuNDUzIDUuMzU1LDguMDQyIDUuMzU1LDEyLjkyMiAwLDQuODggLTEuOTAyLDkuNDcgLTUuMzU2LDEyLjkyNCBtIC0xOC42NzcsLTg2Ljk1IGMgLTkuMTIsLTkuMTIxIC0yMS4yNDQsLTE0LjE0NCAtMzQuMTM2LC0xNC4xNDQgLTEyLjcxNSwwIC0yNC42OCw0Ljg4NSAtMzMuNzU2LDEzLjc2NyAtMC4xMzIsMC4xMjMgLTAuMjYzLDAuMjQ5IC0wLjM5MSwwLjM3NyAtOC45ODIsOC45ODIgLTE0LjEzNCwyMS40MjUgLTE0LjEzNCwzNC4xMzcgMCwxMi45MDUgNS4wMiwyNS4wMzIgMTQuMTM0LDM0LjE0NiBsIDM5Ljg5LDM5Ljg5IGMgOS4xMTQsOS4xMTQgMjEuMjQxLDE0LjEzMyAzNC4xNDYsMTQuMTMzIDEyLjcxMiwwIDI1LjE1NCwtNS4xNTEgMzQuMTM3LC0xNC4xMzMgMC4xMjgsLTAuMTI3IDAuMjUzLC0wLjI1NyAwLjM3NSwtMC4zODkgOC44ODMsLTkuMDc2IDEzLjc2OCwtMjEuMDQzIDEzLjc2OCwtMzMuNzU4IDAsLTEyLjg5MyAtNS4wMjMsLTI1LjAxNyAtMTQuMTQyLC0zNC4xMzYgeiIgaWQ9InBhdGgyMDUwIiBzdHlsZT0iZmlsbC1ydWxlOm5vbnplcm8iLz48L2c+PC9nPjwvc3ZnPg==',
		DEFAULT_IMAGE_BROKEN:
			'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9Ikljb25zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+PGVsbGlwc2UgY2xhc3M9InN0MCIgY3g9IjE2IiBjeT0iMTYiIHJ4PSI3IiByeT0iOCIvPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMyw4YzAtMS43LDEuMy0zLDMtM3MzLDEuMywzLDMiLz48cG9seWxpbmUgY2xhc3M9InN0MCIgcG9pbnRzPSIxNiw4IDE2LDE4IDEyLDIyICIvPjxsaW5lIGNsYXNzPSJzdDAiIHgxPSIxNiIgeDI9IjIwIiB5MT0iMTgiIHkyPSIyMiIvPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03LDV2MC40YzAsMi4zLDEuMSw0LjQsMyw1LjZsMCwwIi8+PHBhdGggY2xhc3M9InN0MCIgZD0iTTI1LDV2MC40YzAsMi4zLTEuMSw0LjQtMyw1LjZsMCwwIi8+PHBhdGggY2xhc3M9InN0MCIgZD0iTTcsMjd2LTAuNGMwLTIuMywxLjEtNC40LDMtNS42bDAsMCIvPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNSwyN3YtMC40YzAtMi4zLTEuMS00LjQtMy01LjZsMCwwIi8+PGxpbmUgY2xhc3M9InN0MCIgeDE9IjMiIHgyPSI5IiB5MT0iMTYiIHkyPSIxNiIvPjxsaW5lIGNsYXNzPSJzdDAiIHgxPSIyMyIgeDI9IjI5IiB5MT0iMTYiIHkyPSIxNiIvPjwvc3ZnPg=='
	}
};

export default appConfigs;