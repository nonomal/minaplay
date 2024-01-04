import { ErrorCodeEnum } from '@/api/enums/error-code.enum';
import { StatusEnum } from '@/api/enums/status.enum';
import { FileSourceEnum } from '@/api/enums/file-source.enum';
import { MessageSchema } from '@/lang/index';

const zh: MessageSchema = {
  app: {
    name: 'MinaPlay',
    ok: '确认',
    cancel: '取消',
    on: '开启',
    off: '关闭',
    unknown: '未知',
    or: '或',
    loader: {
      loading: '加载中...',
      error: '加载失败了！请尝试 ',
      all: '加载完成',
      empty: '没有数据',
      notLoaded: '数据未加载！请尝试 ',
      moreBtn: '加载更多',
      retryBtn: '重新加载',
      loadBtn: '加载',
      itemsPerPage: '每页数据数量',
      pageText: '第 {page} 页，共 {max} 页',
    },
    player: {
      danmaku: {
        settings: '弹幕设置',
        fontSize: '字体大小',
        opacity: '透明度',
        shadow: '字体描边',
      },
    },
    input: {
      keyword: '搜索关键字',
      placeholder: '查找 {item}...',
      sort: '排列',
      order: '顺序',
      status: '状态',
      unselected: '未选择',
      desc: '降序',
      asc: '升序',
    },
    entities: {
      user: '用户',
      source: 'RSS 订阅源',
      rule: '订阅规则',
      download: '下载项目',
      live: '放映室',
      media: '媒体文件',
      series: '剧集',
      episode: '单集',
      file: '文件',
    },
    actions: {
      add: '新建',
      save: '保存',
      reset: '重置',
      delete: '删除',
      edit: '编辑',
      clear: '清空',
      close: '关闭',
      view: '查看',
      retry: '重试',
      refresh: '刷新',
      upload: '上传',
      download: '下载',
      select: '选择',
      more: '[展开]',
      collapse: '[收起]',
      pause: '暂停',
      unpause: '继续',
      cancel: '取消',
      saveToast: '对象已保存',
      deleteTitle: '删除确认',
      deleteConfirm: '确定要删除此{item}吗?',
      deleteToast: '对象已删除',
    },
  },
  layout: {
    sections: '板块',
    actions: {
      dark: '夜间模式',
      light: '昼间模式',
      upload: '上传媒体文件',
      github: '访问 Github',
    },
    navs: {
      resource: '媒体库',
      live: '放映室',
      source: '订阅源',
      rule: '订阅规则',
      dashboard: '控制台',
      setting: '设置',
    },
    user: {
      edit: '编辑用户资料',
      logout: {
        title: '注销登录确认',
        confirm: '确定要注销登录当前 MinaPlay 账号吗?',
        btn: '注销登录',
      },
    },
    upload: {
      title: '文件上传',
      drop: '将文件拖动到此处上传',
      closePageHint: '关闭此页面会终止所有上传任务！',
      cancelTitle: '取消确认',
      cancelConfirm: '确定要取消上传此文件吗',
      status: {
        finished: '已完成',
        generating: '正在生成资源文件',
        sizeExceed: '文件大小超过 10GB',
        canceled: '已取消',
        error: '未知错误',
      },
    },
  },
  common: {
    download: {
      title: '下载',
      item: '下载项目',
      sorts: {
        createAt: '创建时间',
        title: '标题',
      },
      copyLink: '复制下载链接',
      linkCopied: '链接已复制',
      linkCopyFailed: '链接复制失败',
      createAt: '创建于',
      deleteConfirm: '确定要删除此下载项目吗？该操作可能导致资源文件的重复下载。',
    },
  },
  resource: {
    updates: '最近更新',
    medias: '媒体',
    series: '剧集',
    episodes: '单集',
    information: '信息',
    noDescription: '无描述内容',
    episode: {
      next: '下集',
      previous: '上集',
    },
    actions: {
      copy: '复制播放链接',
      openInVLC: '在 VLC 中打开',
      play: '一起看',
      watch: '立即播放',
    },
  },
  media: {
    entity: {
      name: '名称',
      description: '描述',
      isPublic: '是否公开',
      poster: '海报',
      createAt: '创建时间',
    },
  },
  series: {
    entity: {
      name: '名称',
      description: '描述',
      poster: '海报',
      season: '季度',
      tags: '标签',
      count: '总集数',
      finished: '是否完结',
      user: '创建用户',
      createAt: '创建时间',
    },
  },
  episode: {
    entity: {
      title: '标题',
      no: '集号',
      series: '剧集',
      media: '媒体文件',
      pubAt: '发布时间',
      createAt: '创建时间',
    },
  },
  user: {
    deleted: '已删除用户',
    noPermissions: '无操作权限',
    entity: {
      username: '用户名',
      password: '密码',
      permissions: '用户权限',
      avatar: '头像',
      email: '邮箱地址',
      notify: '是否启用通知',
      createAt: '创建时间',
    },
    actions: {
      modifyPermissions: '修改权限',
      resetPassword: '修改密码',
    },
    permission: {
      groups: {
        presets: '预设模板',
        file: '文件',
        media: '媒体文件',
        series: '剧集',
        subscribe: '订阅',
        live: '放映室',
      },
      presets: {
        administrator: '管理员',
        user: '普通用户',
        guest: '访客',
        banned: '禁用',
      },
      fullAccess: '完全控制',
      view: '查看',
      uploadVideo: '视频上传',
      uploadImage: '图片上传',
    },
  },
  source: {
    title: 'RSS 订阅源',
    unnamed: '未命名 RSS 订阅源',
    working: '启用',
    paused: '停止',
    nextTriggerTimes: '触发时间:',
    wrongCronExp: '错误的 CRON 表达式',
    entity: {
      id: 'ID',
      title: '标题',
      remark: '备注',
      cron: 'CRON 表达式',
      url: '链接',
      enabled: '是否启用',
      user: '创建用户',
      createAt: '创建时间',
    },
    sections: {
      info: '信息',
      raw: '原始数据',
      log: '解析日志',
      download: '下载项目',
    },
    info: {
      actions: '操作',
      update: '更新',
      updateDescription: '立即执行更新， MinaPlay 将会自动下载符合您定义的`订阅源规则`的媒体资源文件。',
      updateBtn: '立即更新',
      updateToast: '执行更新成功',
      enabled: '启用状态',
      enabledDescription: '表示该订阅源是否启用。',
      delete: '删除订阅源',
      deleteDescription: '删除此订阅源，该操作不可撤销！',
      cronExps: {
        every10Minutes: '每10分钟',
        every30Minutes: '每30分钟',
        everyHour: '每小时',
        every6Hours: '每6小时',
        everyDay: '每天凌晨 0:00',
      },
    },
    raw: {
      parsedView: '解析视图',
      rawView: '原始视图',
      publishAt: '发布于:',
      visit: '访问网站',
      openPage: '访问发布页',
      download: '在 MinaPlay 中下载',
      downloadCreated: '已创建下载项目',
      copyLink: '复制下载链接',
      linkCopied: '链接已复制',
      linkCopyFailed: '链接复制失败',
    },
    logs: {
      clearLogsTitle: '清空确认',
      clearLogsConfirm: '确定要清空所有日志吗？',
    },
  },
  rule: {
    title: '订阅规则',
    unnamed: '未命名订阅规则',
    entity: {
      id: 'ID',
      remark: '备注',
      sources: 'RSS 订阅源',
      user: '创建用户',
      createAt: '创建时间',
      updateAt: '修改时间',
    },
    sections: {
      info: '信息',
      error: '错误日志',
      download: '下载项目',
    },
    info: {
      code: '代码',
      actions: '操作',
      delete: '删除订阅规则',
      deleteDescription: '删除此订阅规则，该操作不可撤销！',
    },
    logs: {
      clearLogsTitle: '清空确认',
      clearLogsConfirm: '确定要清空所有日志吗？',
    },
  },
  file: {
    entity: {
      name: '名称',
      size: '大小',
      md5: 'MD5',
      mimetype: 'Mimetype',
      source: '来源',
      createAt: '创建时间',
    },
    source: {
      [FileSourceEnum.AUTO_GENERATED]: '自动生成',
      [FileSourceEnum.ARIA2_DOWNLOAD]: '自动下载',
      [FileSourceEnum.USER_UPLOAD]: '用户上传',
      other: '未知来源',
    },
  },
  live: {
    title: '放映室',
    unnamed: '未命名放映室',
    entity: {
      title: '标题',
      password: '密码',
      hasPassword: '密码验证',
      poster: '海报',
      user: '创建用户',
      stream: '直播流',
      createAt: '创建时间',
    },
    play: {
      sendChat: '发送聊天消息...',
      validateTitle: '密码验证',
      validateHint: '该放映室需要密码验证',
      validate: '验证',
      disposeTitle: '关闭提示',
      disposeHint: '放映室已被管理员关闭',
      closeTitle: '关闭确认',
      closeConfirm: '确定要关闭该放映室吗？',
      exit: '退出',
      password: '密码',
      cancelPassword: '取消密码验证',
      passwordLengthRule: '密码至少需要包含4个字符',
      unknownChatType: '未知消息类型',
      noStream: '无直播流',
      stopStreaming: '停止直播',
      stream: {
        clientSync: '用户同步',
        serverPush: '服务端推流',
        liveStream: '第三方视频流',
        type: '直播流类型',
        url: '链接',
      },
      voice: {
        single: '您包场了此放映室！',
        voiceConnectFailed: '连接放映室语音服务失败',
        voiceNotEnabled: '浏览器录音被禁止',
        voiceNoInputDevice: '没有找到录音设备',
        join: '加入语音',
        quit: '退出语音',
        muted: '已静音',
        speaking: '说话中',
      },
      tabs: {
        chat: '聊天消息',
        voice: '房间语音',
        settings: '房间设置',
      },
      notify: {
        connect: '已连接放映室',
        disconnect: '已和放映室断开连接',
        'member-join': '加入了放映室',
        'member-quit': '离开了放映室',
        'member-mute-chat': '您已被放映室管理员禁言',
        'member-mute-voice': '您已被放映室管理员静音',
        'member-kick': `您已被移出该放映室`,
      },
    },
  },
  dashboard: {
    nav: {
      application: '应用程序',
      module: '模块',
    },
    system: '系统',
    user: '用户',
    source: 'RSS 订阅源',
    rule: '订阅规则',
    media: '媒体文件',
    series: '剧集',
    episode: '单集',
    live: '放映室',
    file: '文件',
  },
  login: {
    username: '用户名',
    password: '密码',
    hint: '登录到 MinaPlay',
    btn: '登录',
  },
  utils: {
    copied: '已复制到剪切板',
    copyFailed: '复制失败',
  },
  status: {
    [StatusEnum.PENDING]: '运行中',
    [StatusEnum.SUCCESS]: '已完成',
    [StatusEnum.PAUSED]: '暂停中',
    [StatusEnum.FAILED]: '已失败',
    unknown: '未知',
  },
  error: {
    [ErrorCodeEnum.BAD_REQUEST]: '请求失败！参数错误',
    [ErrorCodeEnum.INTERNAL_SERVER_ERROR]: '请求失败！服务器繁忙',
    [ErrorCodeEnum.QUERY_FAILED]: '请求失败！参数错误',
    [ErrorCodeEnum.UNKNOWN_ERROR]: '请求失败！未知错误',
    [ErrorCodeEnum.NO_SYNC_FIELD]: '请求失败！无同步字段',
    [ErrorCodeEnum.NOT_FOUND]: '请求失败！所访问的资源不存在',
    [ErrorCodeEnum.WRONG_USERNAME_OR_PASSWORD]: '用户名或密码错误',
    [ErrorCodeEnum.USER_NOT_LOGGED_IN]: '用户未登录',
    [ErrorCodeEnum.NO_PERMISSION]: '无操作权限',
    [ErrorCodeEnum.INVALID_TOKEN]: 'Token已过期或失效',
    [ErrorCodeEnum.USERNAME_ALREADY_OCCUPIED]: '用户名被注册',
    [ErrorCodeEnum.EMAIL_ALREADY_OCCUPIED]: '邮箱地址已被注册',
    [ErrorCodeEnum.WRONG_EMAIL_VERIFY_CODE]: '邮箱验证码错误',
    [ErrorCodeEnum.INVALID_FILE]: '文件类型错误',
    [ErrorCodeEnum.INVALID_IMAGE_FILE_TYPE]: '文件内容错误',
    [ErrorCodeEnum.INVALID_VIDEO_FILE_TYPE]: '文件内容错误',
    [ErrorCodeEnum.DUPLICATE_SERIES]: '剧集已存在',
    [ErrorCodeEnum.INVALID_SUBSCRIBE_SOURCE_FORMAT]: '订阅源内容不是合法的 RSS 格式',
    [ErrorCodeEnum.INVALID_SUBSCRIBE_RULE_CODE]: '订阅规则错误',
    [ErrorCodeEnum.USER_CHAT_MUTED]: '用户已被管理员禁言',
    [ErrorCodeEnum.USER_VOICE_MUTED]: '用户已被管理员静音',
    [ErrorCodeEnum.VOICE_SERVICE_ESTABLISH_FAILED]: '放映室语音服务初始化失败',
    [ErrorCodeEnum.WRONG_LIVE_PASSWORD]: '放映室密码错误',
    [ErrorCodeEnum.DUPLICATED_CONNECTION]: '存在多个放映室连接',
    timeout: '请求超时！请稍后再试',
    other: '请求失败！请稍后再试',
  },
};

export default zh;
