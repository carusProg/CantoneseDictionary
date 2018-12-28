module.exports = {
apps :
    {
      name      : 'main',
      script    : 'main.js',
      watch     : true,
      ignore_watch : ["data/*"],
      exec_mode : "cluster",
      instances : 1,
      merge_logs : true,
      log_date_format : "YY-MM-DD HH:mm:ss",
      error_file : "./logs/err.log",
      out_file : "./logs/out.log"
    }
};
