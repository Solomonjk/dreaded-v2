module.exports = async (client, m, isBotAdmin, isAdmin, Owner, body) => {
    if (body && body.includes('chat.whatsapp.com') && !Owner && isBotAdmin && !isAdmin && m.isGroup) {

m.reply("𝐆𝐫𝐨𝐮𝐩 𝐋𝐢𝐧𝐤 𝐃𝐞𝐥𝐞𝐭𝐞𝐝 𝐁𝐲 𝐖𝐢𝐬𝐝𝐨𝐦 𝐀𝐈 𝐂𝐡𝐚𝐭𝐁𝐨𝐭 🤖 𝐋𝐢𝐧𝐤𝐬 𝐀𝐫𝐞 𝐍𝐨𝐭 🚫 𝐀𝐥𝐥𝐨𝐰𝐞𝐝 𝐇𝐞𝐫𝐞 ❌");
        const kid = m.sender;
        await client.sendMessage(m.chat, {
            delete: {
                remoteJid: m.chat,
                fromMe: false,
                id: m.key.id,
                participant: kid
            }
        });
        await client.groupParticipantsUpdate(m.chat, [kid], 'warn');
        await client.sendMessage(m.chat, {
            text: `Removed!\n\n@${kid.split("@")[0]} sending group links is prohibited!`,
            contextInfo: {
                mentionedJid: [kid]
            }
        }, { quoted: m });
    }
};
