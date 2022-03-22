const languageData = {
    AVATAR: "Avatar",
    REQ: "Requested by",
    LANGUAGE_UPDATED: "The language has been successfully set.",
    SETL_PERMS: "Only administrators can set the language.",
    LANGUAGE_NO_EXIST: "This language doesn't exist (you can only choose Russian (ru) or English (en)).",
    NONE: "None", 
    LOW: "Low", 
    MEDIUM: "Medium", 
    HIGH: "High", 
    VERY_HIGH: "Very high",
    RIGHTS: "Mipper6, 2022. All rights are missing.",
    RELEASE: "The newest release of the bot is", 
    BOT_OWNER: "Bot owner", 
    MOD_CATNAME: "🛡️ Moderation",
    INFO_CATNAME: "📋 Information", 
    FUN_CATNAME: "😃 Entertainment",
    STH_CATNAME: "⚙️ Something else", 
    MORE: "more:",
    HELP_DESC: "This is the guide for the bot.", 
    MS: "ms", 
    LATENCY: "The latency is", 
    WEBSITE: "The updates are on the website!",
    GUIDE_NAME: "The bot guide",
    BAN_DESC: "to ban the member",
    CLEAR_DESC: "to purge the messages",
    KICK_DESC: "to kick the member",
    UNBAN_DESC: "to unban the member",
    REL_INDEX: "1.4",
    BOTINFO_DESC: "to get an information about the bot",
    PING_DESC: "to check the bot's latency",
    SERVERINFO_DESC: "to get an information about the guild (server)",
    EIGHTBALL_DESC: "to ask a magic ball",
    QUOTE_DESC: 'to say the "wise" quote',
    SAY_DESC: "to repeat the message on behalf of the bot",
    COIN_TOSS: "⌛ Tossing a coin...",
    HEADS: "Heads!",
    TAILS: "Tails!",
    COIN_ERR: "The coin fell sideways, try again!",
    EIGHTBALL_ONE: "Yes", 
    EIGHTBALL_TWO: "Of course",
    EIGHTBALL_THREE: "Don't even think about it", 
    EIGHTBALL_FOUR: "No", 
    EIGHTBALL_FIVE: "idk", 
    EIGHTBALL_SIX: "Maybe", 
    EIGHTBALL_SEVEN: "Ask again", 
    EIGHTBALL_EIGHT: "Not probably", 
    EIGHTBALL_Q: "Your question is:",
    EIGHTBALL_A: "The answer is:",
    MOD_ERR: "You didn't specify a member.",
    PERMS_LACK: "You don't have permissions to do this.",
    KICK_PERMS_ERR: "The member you specified is a Mod (he can ban or kick members).",
    BAN_SUCCESS: "was successfully banned.",
    BAN_ERR: "Oops, something went wrong.",
    BOTINFO_TITLE: "An information about the bot",
    BOTINFO_CDESC: "You're currently watching an information about the Mipper6 bot.",
    SERV_NUM: "The number of servers with the bot",
    THX: "Thank you for using the bot!",
    INV_NAME: "Click here to invite the bot!",
    CLEAR_LACK_MSG: "You didn't specify a number of messages to purge.",
    ISNAN: "This is not a number!",
    MSG_MAX: "You cannot purge more than 100 messages at a time.",
    MSG_MIN: "You cannot purge less than 1 message.",
    CLEAR_SUCCESS: "Successfully purged",
    MSGS: "messages",
    CLEAR_CDESC: "The messages older than 2 weeks (if they were reached) were skipped.",
    AVATAR_DESC: "to get the member's avatar",
    LOREM_DESC: "to write the Lorem Ipsum text in the chat",
    OIR_DESC: 'to start the "heads or tails" game',
    RANDTEN_DESC: "to get the random number from 1 to 10",
    RANDH_DESC: "to get the random number from 1 to 100",
    KICK_SUCCESS: "was successfully kicked.",
    SAY_LACK: "You didn't specify a message to say.", 
    UNBAN_LACK: "You didn't specify an ID of the banned member.", 
    IDISNAN: "This is not an ID!",
    UNBAN_SUCCESS: "was successfully unbanned.", 
    BAN_SELF: "You can't ban yourself.", 
    BOT_BAN: "Why do you need to ban me?", 
    GUILD_TITLE: "An information about the guild", 
    GUILD_CDESC: "You can see an information about this guild.", 
    GUILD_NAME: "Guild name",
    GUILD_ID: "Guild ID", 
    GUILD_OWNER: "Guild owner",
    GUILD_VER: "Verification level",
    GUILD_TIME: "Created at",
    GUILD_TOTAL: "Total count of members and bots",
    GUILD_CHANNELS: "Total count of channels",
    GUILD_ROLES: "Total count of roles",
    GUILD_EMOJIS: "Total count of emojis",
    GUILD_STICKERS: "Total count of stickers",
    GUILD_BOOST: "Boost count",
    QUOTE_TWO: "The road went forward, the sun was shining, the wardrobe is brown.",
    QUOTE_THREE: "h",
    QUOTE_FOUR: `"I didn't say it" © Mipper6`,
    QUOTE_FIVE: "There's an interesting fact: it someone will say that he's playing with cheats, everyone will know he's a cheater.",
    QUOTE_SIX: "nah i don't want",
    QUOTE_SEVEN: "robtop is lazy af",
    QUOTE_EIGHT: "Whatever name you call someone is what you yourself are called.",
    QUOTE_NINE: "floppa is the best",
    QUOTE_TEN: "it's definetly not no, if it's yes",
    QUOTE_ELEVEN: "Pros and cons of being sick. Pros: you're sick. Cons: you're sick",
    QUOTE_TWELVE: "ratio",
    QUOTE_THIRTEEN: "scan this code",
    QUOTE_FOURTEEN: "less go",
    QUOTE_FIFTEEN: "sussy baka",
    QUOTE_THIRTEEN_FOOTER: "pls",
    SETLANG_DESC: "to set the language",
    EIGHTBALL_LACK: "You didn't specify the question.",
};

const translate = (key, ...args) => {
    const translation = languageData[key]; 
    if(typeof translation === "function") return translation(...args);
    else return translation;
};

module.exports = translate;