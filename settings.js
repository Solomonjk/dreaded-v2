/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY01WbEZrQjlBM0hLcXFzRGpZaUZaU1Z2Z2dqZ3JJVkNBbmF5U1pOQW9rdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXJUZFdEUEtKbE1Celp3bDRuemN1Nm1RT2ZScThrUW1kUUFJMDR4TmxBUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlQlRPU0dZb1VUb0pVTWUvVkgvU1lrdHRtSk5KUSs0cXVOOVNNbjg1SEdZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwZmtaMDRtazRMVUIxN3dhN1lEUDliTU5JOFZQUE84SHdLVStlbHFtM2tZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFFQTZVSUFtYkpNU0Qrd0JyOXd2Y0JMM0RWSzdRbGxqdHo3cG04NXFkbmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktNL0FwRkpGQmt3K21lcE9xZXI1RHZuN2dQbW5HNzN6RWJhMGN5VDJHbGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU9Ja1JBVkN0Y1ArWlE5b2VZcHoyMUJja0x6dlNIL24vU2k4RTVCYk4zST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL3pkMnRPWThOT2k2QjcraHNYOXhldEZaU1pNZ3ZqQUNPSzh0YXhleEFYcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBKWkRZZWQ5cFlwRVNob2dCaGZsUXVtOGNqdktmcEZwOUZPOG54Y0svc0IzRFlPanowc1hIRTRycXQyc0Vlc0RRY25PWlh4NGlnWTFrQ2VjQjBsWUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM1LCJhZHZTZWNyZXRLZXkiOiJHSkZkUllpQWRsZFdVZDZKT3dvR2llWitadVNJL1Zra1NJVnVIUC9udUdzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzE0MjgxNzc2M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzNDg5OTIzMEZFM0QyRTRERkI5QjM2OTZBM0NDNEQwRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM5MzQ5OTgyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxNDI4MTc3NjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDhFNTkxMURBRkFENzQwQzYyRkE2MjI4OEI4QTUyQzYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczOTM0OTk4Mn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTQyODE3NzYzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDMTRGMkRGNDdGNDJBOEUzODc0QjE3NUQ4RjI0MjZCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzkzNDk5OTF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzE0MjgxNzc2M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwOUFDOTAwNDBBQkNCQ0E5MUZERTdFMUIxQzRGOEU2MyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM5MzQ5OTkxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIwX2tjajJWdFNCZTBETHRkbWJPSzF3IiwicGhvbmVJZCI6ImEyOTYzMjc4LTYwNzUtNDY2Zi1iNTIyLTdhZjg0ZjhhMGZhNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrN0l1SFd1cmZTc3lwdEZLcDU3Vnp1SUFUeXc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTlhRa0tRSkF1NitCMFlxLzFMU0lLOTkwNTRRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Iks3VFFGOEFGIiwibWUiOnsiaWQiOiI5MjMxNDI4MTc3NjM6MTlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiU2FtaXVsbGFoIERldGhvIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQbjc1L3dCRU0yL3NiMEdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJKdjBZd1ZYei9waWhGVUw5Y0JMZ29DdlRQVmJkR1ZJNjVtRHJ2aVVHR0V3PSIsImFjY291bnRTaWduYXR1cmUiOiJ0M0RQLzVqUFBYaUJRcmNUeVQ5dVl2SHVVK1hPaFBzTGpwcG9lOXZUdDlVRUxEMXJpYW1PNTl5dERBajJFVGpYR3B2MGNJQ3grd0R1RzFsNUlOTWVCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOG1FSWZsdE9tWTFVZjF3dDQ1bW1Zay9LdlpIZE53STBBRitCREN2bkF4bWw4ZGs0ckJvOHp2dHNWaThxSk9SVjFkSGVPWUM3bURGRlJud0g0K3dIQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxNDI4MTc3NjM6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU2I5R01GVjgvNllvUlZDL1hBUzRLQXIwejFXM1JsU091Wmc2NzRsQmhoTSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczOTM0OTk3OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPcUUifQ==';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.STICKER_AUTHOR || 'fortunatus';
const packname = process.env.PACKNAME || 'dreaded md2 🤖';
const dev = process.env.DEV || '923142817763';
const DevDreaded = dev.split(",");
const botname = process.env.BOTNAME || 'DREADED';
const mode = process.env.MODE || 'private';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const cookies = JSON.parse(process.env.COOKIE || '[{"domain":".youtube.com","expirationDate":1764463277.409877,"hostOnly":false,"httpOnly":false,"name":"__Secure-1PAPISID","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"UoBcKfo0_FSAxQ5D/A5ZClpB2xVLQJQGUx","id":1},{"domain":".youtube.com","expirationDate":1764463277.412158,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSID","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"g.a000pghxevPjwTr5Un_D-PS1UxiaEdymANhc_5NWNQgaApthzLU0MOFGGamQ5yqi2vrAqKldbgACgYKASoSARUSFQHGX2MiB0PtUQYJy2_oQLkmMPXgfRoVAUF8yKpuqWya_M2xRHe_6e9o_6TK0076","id":2},{"domain":".youtube.com","expirationDate":1762941611.655441,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSIDCC","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"AKEyXzWtrmvqerXnEweUSkGiFKAn57TBnvoAEBDi6B33Sg4gpMOANgVFwDBU_JtKQXLpisy_","id":3}]');
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  cookies,
  autobio,
  mode,
autolike,
  prefix,
  mycode,
  author,
  packname,
  dev,
  DevDreaded,
  gcpresence,
  antionce,
session,
antitag,
antidelete
};
