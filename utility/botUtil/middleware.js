

const middleware = async (context, next) => {
    const { m, isBotAdmin, isAdmin } = context;

    if (!m.isGroup) {
        return m.reply("This command is meant for groups");
    }

    await next(); // Proceed to the next function (main handler)
};

module.exports = middleware;
