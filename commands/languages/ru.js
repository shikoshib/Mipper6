const languageData = {
    AVATAR: "Аватар",
    REQ: "Запросил",
    LANGUAGE_UPDATED: "Язык был успешно установлен.",
    SETL_PERMS: "Только участники с правами администратора могут менять язык.",
    LANGUAGE_NO_EXIST: "Этот язык не существует.", 
    NO_LANGUAGE_SPECIFIED: "Пожалуйста, укажите один из этих языков",
    LANG_ALREADY_SET: "Русский язык уже установлен.",
    NONE: "Отсутствует",
    LOW: "Низкий",
    MEDIUM: "Средний",
    HIGH: "Высокий",
    VERY_HIGH: "Очень высокий",
    RIGHTS: "Mipper6, 2022. Все права отсутствуют.", 
    RELEASE: "Текущая версия бота:", 
    BOT_OWNER: "Владелец бота", 
    MOD_CATNAME: "🛡️ Модерация",
    INFO_CATNAME: "📋 Информация", 
    FUN_CATNAME: "😃 Развлечения",
    STH_CATNAME: "Прочее", 
    MORE: "подробнее:", 
    HELP_DESC: "Это справка по всем командам бота.", 
    MS: "мс", 
    LATENCY: "Задержка составляет", 
    WEBSITE: "Все обновления на сайте!", 
    GUIDE_NAME: "Помощь по боту", 
    BAN_DESC: "забанить участника", 
    CLEAR_DESC: "очистить сообщения в чате",
    KICK_DESC: "кикнуть участника",
    UNBAN_DESC: "разбанить участника",
    BOTINFO_DESC: "узнать информацию о боте",
    PING_DESC: "узнать задержку бота",
    SERVERINFO_DESC: "узнать информацию о сервере",
    EIGHTBALL_DESC: "шар судьбы",
    QUOTE_DESC: "высказать «мудрую» фразу",
    SAY_DESC: "повторить сообщение от лица бота",
    COIN_TOSS: "⌛ Подбрасываю монету...",
    HEADS: "Орёл!",
    TAILS: "Решка!",
    COIN_ERR: "Монета упала ребром, попробуйте ещё раз!",
    EIGHTBALL_ONE: "Да", 
    EIGHTBALL_TWO: "Определённо",
    EIGHTBALL_THREE: "И не мечтай", 
    EIGHTBALL_FOUR: "Нет", 
    EIGHTBALL_FIVE: "50/50", 
    EIGHTBALL_SIX: "Возможно", 
    EIGHTBALL_SEVEN: "Спроси ещё раз", 
    EIGHTBALL_EIGHT: "Скорее, нет", 
    EIGHTBALL_Q: "Ваш вопрос:",
    EIGHTBALL_A: "Ответ:",
    MOD_ERR: "Вы не указали участника.",
    PERMS_LACK: "Вы на данный момент не имеете права делать это.",
    KICK_PERMS_ERR: "Участник, которого вы указали, является модератором (имеет право кикать или банить людей).",
    BAN_SUCCESS: "был успешно забанен.",
    BAN_ERR: "Что-то пошло не так, повторите попытку.",
    BOTINFO_TITLE: "Информация о боте",
    BOTINFO_CDESC: "Вы сейчас просматриваете информацию о боте Mipper6.",
    SERV_NUM: "Количество серверов с ботом",
    THX: "Спасибо за использование бота!",
    INV_NAME: "Нажмите сюда, чтобы добавить бота!",
    CLEAR_LACK_MSG: "Вы не указали, сколько сообщений нужно удалить.",
    ISNAN: "Это не число!",
    MSG_MAX: "Вы не можете удалить больше 100 сообщений за раз.",
    MSG_MIN: "Вы должны ввести число больше, чем 1.",
    CLEAR_SUCCESS: "Успешно удалено",
    MSGS: "сообщений",
    CLEAR_CDESC: "Сообщения двухнедельной давности (если таковые есть) были проигнорированы.",
    AVATAR_DESC: "получить аватар участника",
    LOREM_DESC: "написать текст Lorem Ipsum",
    OIR_DESC: "подбросить монету",
    RANDTEN_DESC: "получить случайное число от 1 до 10",
    RANDH_DESC: "получить случайное число от 1 до 100",
    KICK_SUCCESS: "был успешно кикнут.",
    SAY_LACK: "Вы не указали, что повторить.", 
    UNBAN_LACK: "Вы не указали ID забаненного участника.", 
    IDISNAN: "Это не ID!",
    UNBAN_SUCCESS: "был успешно разбанен.", 
    BAN_SELF: "Вы не можете забанить себя.", 
    BOT_BAN: "Зачем меня банить?", 
    GUILD_TITLE: "Информация об этом сервере", 
    GUILD_CDESC: "В этом сообщении представлена вся информация об этом сервере.", 
    GUILD_NAME: "Название сервера",
    GUILD_ID: "ID сервера", 
    GUILD_OWNER: "Владелец",
    GUILD_VER: "Уровень модерации",
    GUILD_TIME: "Дата создания",
    GUILD_TOTAL: "Всего участников и ботов",
    GUILD_CHANNELS: "Всего каналов",
    GUILD_ROLES: "Всего ролей",
    GUILD_EMOJIS: "Всего эмодзи",
    GUILD_STICKERS: "Всего стикеров",
    GUILD_BOOST: "Количество бустов",
    QUOTE_TWO: "Дорога шла вперёд, солнце светило, шкаф коричневый.",
    QUOTE_THREE: "ъ",
    QUOTE_FOUR: "«Я такого не говорил» © Mipper6",
    QUOTE_FIVE: "Интересный факт: если люди скажут, что они играют с читами, то все узнают, что они читеры.",
    QUOTE_SIX: "не обязан",
    QUOTE_SEVEN: "RobTop ленивая срака",
    QUOTE_EIGHT: "Кто как обзывается, тот сам так и называется",
    QUOTE_NINE: "но но но фир но лей",
    QUOTE_TEN: "если да, то это точно не нет",
    QUOTE_ELEVEN: "Плюсы и минусы болеть. Плюсы: ты болеешь. Минусы: ты болеешь",
    QUOTE_TWELVE: "почему все хотят стать трусиками доры",
    QUOTE_THIRTEEN: "Отсканируй =)",
    QUOTE_FOURTEEN: "Короче пацаны рецепт оладушек. Кефир 2,5% - 500 мл. Мука - 3 стакана. Яйцо - 1 шт. Сахарок - 2 ст.л. Сода - 1 ч.л. Соль- ч.л.",
    QUOTE_FIFTEEN: "скажи клей",
    QUOTE_THIRTEEN_FOOTER: "пж",
    QUOTE_SIXTEEN: "Сегодня сегодня — это сегодня", 
    SETLANG_DESC: "установить язык",
    EIGHTBALL_LACK: "Вы не указали вопрос.",
    ERROR: "Ошибка", 
    QUEUE_LACK: "Ничего не воспроизводится.", 
    PAUSE: "Музыка успешно приостановлена", 
    PAUSE_CDESC: "Используйте ~resume, чтобы возобновить музыку.", 
    RESUME: "Музыка успешно возобновлена", 
    PLAY: "был успешно включен. Длительность трека:", 
    DONE: "Готово", 
    RESULT_LACK: "Ничего не найдено по данному запросу",
    VC_LACK: "Вы должны быть в голосовом канале, чтобы включить трек.",
    SONG_LACK: "Вы не указали трек, который надо включить.",
    SONGINFO_TITLE: "Информация о треке, играющем сейчас",
    SONGINFO_CDESC: "Сейчас играет",
    STOP_CDESC: "Бот вышел из голосового канала.",
    STOP_TITLE: "Музыка успешно остановлена",
    MUS_CATNAME: "Музыка",
    PAUSE_DESC: "поставить трек на паузу",
    PLAY_DESC: "включить трек",
    RESUME_DESC: "возобновить трек",
    SONGINFO_DESC: "информация о треке, играющем сейчас",
    STOP_DESC: "остановить музыку",
    CAT_DESC: "получить рандомную картинку с котиками",
    DOG_DESC: "получить рандомную картинку с собаками",
    HOURS: "часов",
    DAYS: "дней",
    MINUTES: "минут",
    SECONDS: "секунд",
    AND: "и",
    UPTIME: "Аптайм",
    RAM: "ОЗУ",
    TOTALRAM: "Всего",
    USEDRAM: "Использовано",
    FREERAM: "Свободно",
    PERUSEDRAM: "Процент использованной памяти",
    GB: "ГБ",
    MB: "МБ",
    EMOTE_DESC: "получить картинку эмодзи",
    EMOTEID_DESC: "получить картинку эмодзи по ID",
    EMOTE_LACK: "Вы должны указать эмодзи.",
    EMOTE_ERR_TITLE: "Два варианта, почему возникла эта ошибка:",
    DEFAULT_EMOTE: "Вы указали стандартный эмодзи Discord (бот принимает только кастомные).",
    EMOTE_ID: "Вы указали ID эмодзи. Используйте для этого команду ~emoteid.",
    EMOTE_ID_LACK: "Вы должны указать ID эмодзи.",
    LEVEL_NAME: "Название",
    LEVEL_DESC: "Описание",
    NO_DESC_PROVIDED: "не указано",
    CREATED_BY: "Креатор",
    DIFF: "Сложность",
    EASY: "Легко",
    NORMAL: "Нормально",
    HARD: "Сложно",
    HARDER: "Очень сложно",
    INSANE: "Безумно",
    EASY_DEMON: "Лёгкий демон",
    MEDIUM_DEMON: "Средний демон",
    HARD_DEMON: "Сложный демон",
    INSANE_DEMON: "Безумный демон",
    EXTREME_DEMON: "Экстремальный демон",
    AUTO_DIFF: "Автоматически",
    DOWNLOADS_GD: "Скачиваний",
    LENGTH_GD: "Длительность",
    TINY_LENGTH: "Очень короткий (меньше 10 секунд)",
    SHORT_LENGTH: "Короткий (10-30 секунд)",
    MEDIUM_LENGTH: "Средний (30-60 секунд)",
    LONG_LENGTH: "Длинный (1-2 минуты)",
    XL_LENGTH: "XL (больше 2 минут)",
    STARS_GD: "Звёзды",
    ORBS_GD: "Орбы",
    DIAMONDS: "Алмазы",
    GAMEVER: "Требуемая игровая версия",
    LEVEL_VER: "Версия уровня",
    STARS_REQUESTED: "Запрошено звёзд",
    GDLEVEL_TITLE: "Информация об уровне",
    BY: "от",
    NG_OPEN: "Открыть на Newgrounds",
    DOWNLOAD_MP3: "Скачать в MP3",
    LARGE_LEVEL: "Данный уровень может лагать на слабых устройствах.",
    DEFAULT_SONG: "Стандартный трек",
    GDSONG_TRUE: "Этот трек можно использовать",
    GDSONG_FALSE: "Этот трек нельзя использовать",
    GDSONG_ERR: "Артист не добавлен в белый список РобТопом или внутриигровыми старшими модераторами",
    GDSONG_NOSONG: "Или трека с этим ID нет на Newgrounds.",
    GDCUBE: "Куб",
    GDSHIP: "Кораблик",
    GDBALL: "Шар",
    GDUFO: "НЛО",
    GDWAVE: "Волна",
    GDROBOT: "Робот",
    GDSPIDER: "Паук",
    UNRATED: "Без оценки",
    MB: "МБ",
    GDLEVEL_START: "Секундочку...",
    INVALID_YT: "Укажите правильную ссылку на видео без временных кодов. Пример: https://www.youtube.com/watch?v=1Z5KRq5L5pU или https://youtu.be/1Z5KRq5L5pU", 
    INVITE_LINK: "Ссылка",
    CHANNEL: "Канал",
    ROCK: "камень",
    PAPER: "бумага",
    SCISSORS: "ножницы",
    NA: "н/д",
    TWOPLAYER: "В данном уровне дуалы управляются отдельно.",
    OBJECT_COUNT: "Объектов",
    COPYID: "Скопировано с уровня с ID",
    INVITE_PERMS_LACK: "У меня недостаточно прав, чтобы создать приглашение!",
    RPS_CHOICE_LACK: "Пожалуйста, укажите ваш выбор.",
    RPS_POSSIBLE_ANSWERS: "Возможные варианты:",
    RPS_YOU_WON: "Вы победили!",
    RPS_DRAW: "Ничья!",
    RPS_YOU_LOSE: "Вы проиграли!",
    RPS_BOT_CHOICE: "Мой выбор:",
    RPS_USER_CHOICE: "Ваш выбор:",
    RR_WARNING: "За игру в русскую рулетку бот может вас забанить, кикнуть, замьютить или ничего не сделать (если повезёт 😉)",
    RR_TIMER: "Игра начнётся через 15 секунд.",
    WARNING: "Предупреждение",
    RR_ONE: "Ничего не произошло!",
    RR_TWO: "Вы получили мут на минуту (возможно, даже навсегда, потому что бот может выключиться в любой момент. Но кто знает?.. 🤫).",
    RR_THREE: "У вас есть возможность смотреть абсолютно все каналы сервера!",
    RR_FOUR: "Упс, вы получили бан на день!",
    RR_REASON: "Результат игры в русскую рулетку",
    RR_FIVE: "Вы получили мут на день (возможно, даже навсегда, потому что бот может выключиться в любой момент. Но кто знает?.. 🤫).",
    RR_SIX: "ты лох аххпхпахпхаххааххпзхззазазааахахахазаха",
    RR_SEVEN: "импостер",
    RR_EIGHT_TITLE: "Вам сильно повезло! 😎",
    RR_NINE_KICK: "Вы были кикнуты с сервера",
    RR_NINE_DESC: "Ничего страшного, специально для тебя я сгенерировал ссылку, присоединяйся",
    NONG: "Нет на Newgrounds",
    RR_MUTED: "Вы попали в мут!",
    INVITE_DESC: "создать приглашение на сервер",
    RR_DESC: "русская рулетка",
    RPS_DESC: "камень, ножницы, бумага",
    RR_ADMIN: "У вас есть права администратора. Это значит, что на вас ничего не подействует. Так что вот 🥲",
    TEST: "467"
};

const translate = (key, ...args) => {
    const translation = languageData[key]; 
    if(typeof translation === "function") return translation(...args);
    else return translation;
};

module.exports = translate;
