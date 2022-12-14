export const SOCKET_INIT_SOCKET = 'socket/INIT_SOCKET';
export const SOCKET_STATUS_CHANGE = 'socket/STATUS_CHANGE';
export const SOCKET_WTS_STATUS_CHANGE = 'socket/WTS_STATUS_CHANGE';
export const SOCKET_AUTHENTICATED = 'socket/AUTHENTICATED';
export const SOCKET_UNAUTHENTICATED = 'socket/UNAUTHENTICATED';

export const UPDATE_DEBUGGING = 'debugging/UPDATE';

export const ROUTER_RESET = 'router/RESET';
export const ROUTER_LOCATION_CHANGE = 'router/LOCATION_CHANGE';

export const GLOBAL_LANG = 'global/LANG';
export const GLOBAL_I18N = 'global/I18N';
export const GLOBAL_PRICE_BOARD_SOCKET = 'global/PRICE_BOARD_SOCKET';
export const GLOBAL_WTS_SOCKET = 'global/WTS_SOCKET';
export const GLOBAL_ACCOUNT_LIST = 'global/ACCOUNT_LIST';
export const GLOBAL_CONFIG = 'global/CONFIG';
export const GLOBAL_CURRENT_SYMBOL = 'global/CURRENT_SYMBOL';
export const GLOBAL_MARKET_STATUS = 'global/MARKET_STATUS';
export const GLOBAL_MARKET_STATUS_CHANGE_DATA =
  'global/MARKET_STATUS_CHANGE_DATA';
export const GLOBAL_SYMBOL_LIST = 'global/SYMBOL_LIST';
export const GLOBAL_SYMBOL_LIST_UPDATE = 'global/SYMBOL_LIST_UPDATE';
export const GLOBAL_STOCK_LIST = 'global/STOCK_LIST';
export const GLOBAL_BANK_INFO = 'global/BANK_INFO';
export const GLOBAL_BANK_INFO_SUCCESS = 'global/BANK_INFO_SUCCESS';
export const GLOBAL_BANK_INFO_FAILED = 'global/BANK_INFO_FAILED';
export const GLOBAL_CW_LIST = 'global/CW_LIST';
export const GLOBAL_FUTURES_LIST = 'global/FUTURES_LIST';
export const GLOBAL_INDEX_LIST = 'global/INDEX_LIST';
export const GLOBAL_USERINFO = 'global/USERINFO';
export const GLOBAL_DOMAIN_USERINFO = 'global/DOMAIN_USERINFO';
export const GLOBAL_USER_EXTRA_INFO = 'global/USER_EXTRA_INFO';
export const GLOBAL_ADD_NOTIFICATION = 'global/ADD_NOTIFICATION';
export const GLOBAL_GET_NOTIFICATION_SUCCESS =
  'global/GET_NOTIFICATION_SUCCESS';
export const GLOBAL_RESET_BOARD_DATA = 'global/RESET_BOARD_DATA';
export const GLOBAL_RESET_MARKET_DATA = 'global/RESET_MARKET_DATA';
export const GLOBAL_SELECT_ACCOUNT = 'global/SELECT_ACCOUNT';
export const GLOBAL_SYMBOL_INFO_MODAL = 'global/SYMBOL_INFO_MODAL';
export const GLOBAL_SIDEBAR_FUNCTION = 'global/SIDEBAR_FUNCTION';
export const GLOBAL_FOOTER_FUNCTION = 'global/FOOTER_FUNCTION';

export const WATCHLIST_ADD_ITEM = 'watchlist/ADD_ITEM';
export const WATCHLIST_UPDATE_ITEM = 'watchlist/UPDATE_ITEM';
export const WATCHLIST_DELETE_ITEM = 'watchlist/DELETE_ITEM';

export const WATCHLIST_SERVER_GET_ITEM = 'watchlist/SERVER_GET_ITEM';
export const WATCHLIST_SERVER_ADD_ITEM = 'watchlist/SERVER_ADD_ITEM';
export const WATCHLIST_SERVER_UPDATE_ITEM = 'watchlist/SERVER_UPDATE_ITEM';
export const WATCHLIST_SERVER_UPDATE_ITEM_SUCCESS =
  'watchlist/SERVER_UPDATE_ITEM_SUCCESS';
export const WATCHLIST_SERVER_ADD_ITEM_SUCCESS =
  'watchlist/SERVER_ADD_ITEM_SUCCESS';
export const WATCHLIST_SERVER_DELETE_ITEM = 'watchlist/SERVER_DELETE_ITEM';
export const WATCHLIST_SERVER_DELETE_ITEM_SUCCESS =
  'watchlist/SERVER_DELETE_ITEM_SUCCESS';
export const WATCHLIST_SERVER_GET_LIST = 'watchlist/SERVER_GET_LIST';
export const WATCHLIST_SERVER_GET_LIST_SUCCESS = 'global/FAVORITE_LISTS';

export const WATCHLIST_SELECT_ITEM = 'watchlist/SELECT_ITEM';
export const WATCHLIST_UPDATE_SELECTED_ITEM = 'watchlist/UPDATE_SELECTED_ITEM';
export const WATCHLIST_GET_SYMBOL_DATA = 'watchlist/GET_SYMBOL_DATA';
export const WATCHLIST_GET_SYMBOL_DATA_SUCCEDED =
  'watchlist/GET_SYMBOL_DATA_SUCCEDED';
export const WATCHLIST_GET_SYMBOL_DATA_FAILED =
  'watchlist/GET_SYMBOL_DATA_FAILED';

export const LOCALIZATION_INIT_I18N = 'localization/INIT_I18N';
export const LOCALIZATION_CHANGE_LANGUAGE = 'localization/CHANGE_LANGUAGE';

export const COMMON_SHOW_NOTIFICATION = 'common/SHOW_NOTIFICATION';
export const COMMON_CLEAR_ALL_NOTIFICATIONS = 'common/CLEAR_ALL_NOTIFICATIONS';
export const COMMON_CLEAR_NOTIFICATION_UNSEEN_COUNT =
  'common/CLEAR_UN_SEEN_COUNT';
export const COMMON_GET_NOTIFICATION = 'common/GET_NOTIFICATION';

export const AUTHENTICATION_STATE_CHANGE = 'authentication/STATE_CHANGE';
export const AUTHENTICATION_LOGIN_DOMAIN = 'authentication/LOGIN_DOMAIN';
export const AUTHENTICATION_LOGIN_DOMAIN_SUCCESS =
  'authentication/LOGIN_DOMAIN_SUCCESS';
export const AUTHENTICATION_LOGIN_DOMAIN_FAILED =
  'authentication/LOGIN_DOMAIN_FAILED';
export const AUTHENTICATION_LOGOUT = 'authentication/LOGOUT';
export const AUTHENTICATION_LOGOUT_SESSION_TIMEOUT =
  'authentication/LOGOUT_SESSION_TIMEOUT';
export const AUTHENTICATION_VERIFY_OTP = 'authentication/VERIFY_OTP';
export const AUTHENTICATION_VERIFY_OTP_SUCCESS =
  'authentication/VERIFY_OTP_SUCCESS';
export const AUTHENTICATION_VERIFY_OTP_FAILED =
  'authentication/VERIFY_OTP_FAILED';

export const MARKET_INIT = 'market/INIT';
export const MARKET_SYMBOL_INIT = 'market/SYMBOL_INIT';
export const MARKET_STATUS_INIT = 'market/STATUS_INIT';
export const MARKET_SET_CURRENT_SYMBOL = 'market/SET_CURRENT_SYMBOL';
export const MARKET_SET_CURRENT_SYMBOL_DATA = 'market/SET_CURRENT_SYMBOL_DATA';
export const MARKET_SET_CURRENT_SYMBOL_INFO_DATA =
  'market/SET_CURRENT_SYMBOL_INFO_DATA';
export const MARKET_QUERY_INDEX_STOCK_LIST = 'market/QUERY_INDEX_STOCK_LIST';
export const MARKET_QUERY_INDEX_STOCK_LIST_SUCCESS =
  'market/QUERY_INDEX_STOCK_LIST_SUCCESS';
export const MARKET_QUERY_INDEX_STOCK_LIST_FAILED =
  'market/QUERY_INDEX_STOCK_LIST_FAILED';
export const MARKET_QUERY_SYMBOL_DATA = 'market/QUERY_SYMBOL_DATA';
export const MARKET_QUERY_SYMBOL_DATA_FAILED =
  'market/QUERY_SYMBOL_DATA_FAILED';
export const MARKET_QUERY_SYMBOL_DATA_SUCCESS =
  'market/QUERY_SYMBOL_DATA_SUCCESS';
export const MARKET_QUERY_INDEX_DATA = 'market/QUERY_INDEX_DATA';
export const MARKET_QUERY_INDEX_DATA_FAILED = 'market/QUERY_INDEX_DATA_FAILED';
export const MARKET_QUERY_INDEX_DATA_SUCCESS =
  'market/QUERY_INDEX_DATA_SUCCESS';
export const MARKET_SYMBOL_SUBSCRIBE_DATA = 'market/SYMBOL_SUBSCRIBE_DATA';
export const MARKET_SYMBOL_MOBILE_SERVER_SUBSCRIBE_DATA =
  'market/SYMBOL_MOBILE_SERVER_SUBSCRIBE_DATA';
export const MARKET_SYMBOL_ODDLOT_SUBSCRIBE_DATA =
  'market/SYMBOL_ODDLOT_SUBSCRIBE_DATA';
export const MARKET_INDEX_SUBSCRIBE_DATA = 'market/INDEX_SUBSCRIBE_DATA';
export const MARKET_GET_INDEX_MINUTES = 'market/GET_INDEX_MINUTES';
export const MARKET_GET_INDEX_MINUTES_SUCCESS =
  'market/GET_INDEX_MINUTES_SUCCESS';
export const MARKET_GET_INDEX_MINUTES_FAILED =
  'market/GET_INDEX_MINUTES_FAILED';
export const MARKET_QUERY_SYMBOL_QUOTE = 'market/QUERY_SYMBOL_QUOTE';
export const MARKET_QUERY_SYMBOL_QUOTE_SUCCESS =
  'market/QUERY_SYMBOL_QUOTE_SUCCESS';
export const MARKET_QUERY_SYMBOL_QUOTE_FAILED =
  'market/QUERY_SYMBOL_QUOTE_FAILED';
export const MARKET_QUERY_SYMBOL_QUOTE_CHART =
  'market/QUERY_SYMBOL_QUOTE_CHART';
export const MARKET_QUERY_SYMBOL_QUOTE_CHART_CLEAR =
  'market/QUERY_SYMBOL_QUOTE_CHART_CLEAR';
export const MARKET_QUERY_SYMBOL_QUOTE_CHART_SUCCESS =
  'market/QUERY_SYMBOL_QUOTE_CHART_SUCCESS';
export const MARKET_QUERY_SYMBOL_QUOTE_CHART_FAILED =
  'market/QUERY_SYMBOL_QUOTE_CHART_FAILED';
export const MARKET_CACHE_SYMBOL_DATA = 'market/CACHE_SYMBOL_DATA';
export const MARKET_CACHE_SYMBOL_ODDLOT_DATA =
  'market/CACHE_SYMBOL_ODDLOT_DATA';
export const MARKET_GET_LAST_TRADING_DATE =
  'market/MARKET_GET_LAST_TRADING_DATE';
export const MARKET_GET_LAST_TRADING_DATE_SUCCESS =
  'market/MARKET_GET_LAST_TRADING_DATE_SUCCESS';
export const MARKET_GET_LAST_TRADING_DATE_FAILED =
  'market/MARKET_GET_LAST_TRADING_DATE_FAILED';
export const MARKET_QUERY_SYMBOL_ODDLOT = 'market/QUERY_SYMBOL_ODDLOT';
export const MARKET_QUERY_SYMBOL_ODDLOT_SUCCESS =
  'market/QUERY_SYMBOL_ODDLOT_SUCCESS';
export const MARKET_QUERY_SYMBOL_ODDLOT_FAILED =
  'market/QUERY_SYMBOL_ODDLOT_FAILED';
export const MARKET_ORDER_MATCH_SUBSCRIBE_DATA =
  'market/ORDER_MATCH_SUBSCRIBE_DATA';

export const SUBSCRIBE_SYMBOL = 'subscribe/SYMBOL';
export const UNSUBSCRIBE_SYMBOL = 'unsubscribe/SYMBOL';
export const SUBSCRIBE_SYMBOL_MOBILE_SERVER = 'subscribe/SYMBOL_MOBILE_SERVER';
export const UNSUBSCRIBE_SYMBOL_MOBILE_SERVER =
  'unsubscribe/SYMBOL_MOBILE_SERVER';
export const SUBSCRIBE_MARKET_STATUS = 'subscribe/MARKET_STATUS';
export const SUBSCRIBE_MARKET_REFRESH_DATA = 'subscribe/MARKET_REFRESH_DATA';
export const SUBSCRIBE_ORDER_MATCH = 'subscribe/ORDER_MATCH';
export const UNSUBSCRIBE_ORDER_MATCH = 'unsubscribe/ORDER_MATCH';

export const ACCOUNT_OTP_INIT_DATA_FOR_OTP_FORM =
  'account/OTP_INIT_DATA_FOR_OTP_FORM';
export const ACCOUNT_OTP_GET_TYPE = 'account/OTP_GET_TYPE';
export const ACCOUNT_OTP_GET_TYPE_SUCCESS = 'account/OTP_GET_TYPE_SUCCESS';
export const ACCOUNT_OTP_GET_TYPE_FAIL = 'account/OTP_GET_TYPE_FAIL';
export const ACCOUNT_OTP_GET_MATRIX = 'account/OTP_GET_MATRIX';
export const ACCOUNT_OTP_GET_MATRIX_SUCCESS = 'account/OTP_GET_MATRIX_SUCCESS';
export const ACCOUNT_OTP_GET_MATRIX_FAIL = 'account/OTP_GET_MATRIX_FAIL';
export const ACCOUNT_OTP_VERIFY = 'account/OTP_VERIFY';
export const ACCOUNT_OTP_SENT = 'account/OTP_SENT';
export const ACCOUNT_OTP_COUNT_DOWN = 'account/OTP_SENT_COUNT_DOWN';
export const ACCOUNT_OTP_VERIFY_SUCCESS = 'account/OTP_VERIFY_SUCCESS';
export const ACCOUNT_OTP_VERIFY_FAIL = 'account/OTP_VERIFY_FAIL';
export const ACCOUNT_OTP_SHOW_MODAL = 'account/OTP_SHOW_MODAL';
export const ACCOUNT_OTP_CLOSE_MODAL = 'account/OTP_CLOSE_MODAL';
export const ACCOUNT_OTP_RESET = 'account/OTP_RESET';
export const ACCOUNT_OTP_SET_VALID = 'account/OTP_SET_VALID';

export const ACCOUNT_QUERY_EQUITY_PORTFOLIO = 'account/QUERY_EQUITY_PORTFOLIO';
export const ACCOUNT_QUERY_EQUITY_PORTFOLIO_SUCCESS =
  'account/QUERY_EQUITY_PORTFOLIO_SUCCESS';
export const ACCOUNT_QUERY_EQUITY_PORTFOLIO_FAILED =
  'account/QUERY_EQUITY_PORTFOLIO_FAILED';
export const ACCOUNT_QUERY_DERIVATIVES_PORTFOLIO =
  'account/QUERY_DERIVATIVES_PORTFOLIO';
export const ACCOUNT_QUERY_DERIVATIVES_PORTFOLIO_SUCCESS =
  'account/QUERY_DERIVATIVES_PORTFOLIO_SUCCESS';
export const ACCOUNT_QUERY_DERIVATIVES_PORTFOLIO_FAILED =
  'account/QUERY_DERIVATIVES_PORTFOLIO_FAILED';
export const ACCOUNT_QUERY_PORTFOLIOS = 'account/QUERY_PORTFOLIOS';
export const ACCOUNT_QUERY_PORTFOLIOS_SUCCESS =
  'account/QUERY_PORTFOLIOS_SUCCESS';
export const ACCOUNT_QUERY_PORTFOLIOS_FAILED =
  'account/QUERY_PORTFOLIOS_FAILED';

// Place order
export const ORDER_PLACE_ORDER = 'order/PLACE_ORDER';
export const ORDER_DERIVATIVES_PLACE_ORDER = 'order/DERIVATIVES_PLACE_ORDER';
export const ORDER_PLACE_ORDER_SUCCESS = 'order/PLACE_ORDER_SUCCESS';
export const ORDER_PLACE_ORDER_FAILED = 'order/PLACE_ORDER_FAILED';

// Cancel order
export const ORDER_CANCEL_ORDER = 'order/CANCEL_ORDER';
export const ORDER_CANCEL_STOP_ORDER = 'order/CANCEL_STOP_ORDER';
export const ORDER_DERIVATIVES_CANCEL_ORDER = 'order/DERIVATIVES_CANCEL_ORDER';
export const ORDER_CANCEL_ORDER_SUCCESS = 'order/CANCEL_ORDER_SUCCESS';
export const ORDER_CANCEL_ORDER_FAILED = 'order/CANCEL_ORDER_FAILED';

// Modify order
export const ORDER_MODIFY_ORDER = 'order/MODIFY_ORDER';
export const ORDER_MODIFY_STOP_ORDER = 'order/MODIFY_STOP_ORDER';
export const ORDER_DERIVATIVES_MODIFY_ORDER = 'order/DERIVATIVES_MODIFY_ORDER';
export const ORDER_MODIFY_ORDER_SUCCESS = 'order/MODIFY_ORDER_SUCCESS';
export const ORDER_MODIFY_ORDER_FAILED = 'order/MODIFY_ORDER_FAILED';

export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS';
export const CHANGE_PASSWORD_FAILED = 'CHANGE_PASSWORD_FAILED';

export const CHANGE_PIN = 'CHANGE_PIN';
export const CHANGE_PIN_SUCCESS = 'CHANGE_PIN_SUCCESS';
export const CHANGE_PIN_FAILED = 'CHANGE_PIN_FAILED';

export const ACCOUNT_EQUITY_STOCK_TRANSACTION_HISTORY =
  'account/EQUITY_STOCK_TRANSACTION_HISTORY';
export const ACCOUNT_EQUITY_STOCK_TRANSACTION_HISTORY_LOAD_MORE =
  'account/EQUITY_STOCK_TRANSACTION_HISTORY_LOAD_MORE';
export const ACCOUNT_EQUITY_STOCK_TRANSACTION_HISTORY_SUCCESS =
  'account/EQUITY_STOCK_TRANSACTION_HISTORY_SUCCESS';
export const ACCOUNT_EQUITY_STOCK_TRANSACTION_HISTORY_FAILED =
  'account/EQUITY_STOCK_TRANSACTION_HISTORY_FAILED';

// Account AssetInformation
export const ACCOUNT_ASSET_INFORMATION = 'account/ASSET_INFORMATION';
export const ACCOUNT_ASSET_INFORMATION_SUCCESS =
  'account/ASSET_INFORMATION_SUCCESS';
export const ACCOUNT_ASSET_INFORMATION_FAILED =
  'account/ASSET_INFORMATION_FAILED';

// get order history
export const ACCOUNT_EQUITY_ORDER_HISTORY = 'account/EQUITY_ORDER_HISTORY';
export const ACCOUNT_EQUITY_ORDER_HISTORY_LOAD_MORE =
  'account/EQUITY_ORDER_HISTORY_LOAD_MORE';
export const ACCOUNT_EQUITY_ORDER_HISTORY_SUCCESS =
  'account/EQUITY_ORDER_HISTORY_SUCCESS';
export const ACCOUNT_EQUITY_ORDER_HISTORY_FAILED =
  'account/EQUITY_ORDER_HISTORY_FAILED';

export const ACCOUNT_DERIVATIVE_ORDER_HISTORY =
  'account/DERIVATIVE_ORDER_HISTORY';
export const ACCOUNT_DERIVATIVE_ORDER_HISTORY_SUCCESS =
  'account/DERIVATIVE_ORDER_HISTORY_SUCCESS';
export const ACCOUNT_DERIVATIVE_ORDER_HISTORY_FAILED =
  'account/DERIVATIVE_ORDER_HISTORY_FAILED';

export const ACCOUNT_EQUITY_LOAN_STATEMENT = 'account/EQUITY_LOAN_STATEMENT';
export const ACCOUNT_EQUITY_LOAN_STATEMENT_SUCCESS =
  'account/EQUITY_LOAN_STATEMENT_SUCCESS';
export const ACCOUNT_EQUITY_LOAN_STATEMENT_FAILED =
  'account/EQUITY_LOAN_STATEMENT_FAILED';

export const ACCOUNT_EQUITY_CONFIRM_DEBT = 'account/EQUITY_CONFIRM_DEBT';
export const ACCOUNT_EQUITY_CONFIRM_DEBT_SUCCESS =
  'account/EQUITY_CONFIRM_DEBT_SUCCESS';
export const ACCOUNT_EQUITY_CONFIRM_DEBT_FAILED =
  'account/EQUITY_LOAN_CONFIRM_DEBT_FAILED';

export const ACCOUNT_EQUITY_SUBMIT_CONFIRM_DEBT =
  'account/EQUITY_SUBMIT_CONFIRM_DEBT';
export const ACCOUNT_EQUITY_SUBMIT_CONFIRM_DEBT_SUCCESS =
  'account/EQUITY_SUBMIT_CONFIRM_DEBT_SUCCESS';
export const ACCOUNT_EQUITY_SUBMIT_CONFIRM_DEBT_FAILED =
  'account/EQUITY_SUBMIT_LOAN_CONFIRM_DEBT_FAILED';

export const EQUITY_LOAN_CONTRACT = 'ENQUITY_LOAN_CONTRACT';
export const EQUITY_LOAN_CONTRACT_SUCCESS = 'ENQUITY_LOAN_CONTRACT_SUCCESS';
export const EQUITY_LOAN_CONTRACT_FAILED = 'ENQUITY_LOAN_CONTRACT_FAILED';

export const QUERY_CLIENT_DETAIL = 'QUERY_CLIENT_DETAIL';
export const QUERY_CLIENT_DETAIL_SUCCESS = 'QUERY_CLIENT_DETAIL_SUCCESS';
export const QUERY_CLIENT_DETAIL_FAILED = 'QUERY_CLIENT_DETAIL_FAILED';

export const ACCOUNT_RIGHT_EXERCISE_SUBSCRIPTIONS =
  'account/RIGHT_EXERCISE_SUBSCRIPTIONS';
export const ACCOUNT_RIGHT_EXERCISE_SUBSCRIPTIONS_LOAD_MORE =
  'account/RIGHT_EXERCISE_SUBSCRIPTIONS_LOAD_MORE';
export const ACCOUNT_RIGHT_EXERCISE_SUBSCRIPTIONS_SUCCESS =
  'account/RIGHT_EXERCISE_SUBSCRIPTIONS_SUCCESS';
export const ACCOUNT_RIGHT_EXERCISE_SUBSCRIPTIONS_FAILED =
  'account/RIGHT_EXERCISE_SUBSCRIPTIONS_FAILED';

export const ACCOUNT_RIGHT_INFORMATION = 'account/RIGHT_INFORMATION';
export const ACCOUNT_RIGHT_INFORMATION_LOAD_MORE =
  'account/RIGHT_INFORMATION_LOAD_MORE';
export const ACCOUNT_RIGHT_INFORMATION_SUCCESS =
  'account/RIGHT_INFORMATION_SUCCESS';
export const ACCOUNT_RIGHT_INFORMATION_FAILED =
  'account/RIGHT_INFORMATION_FAILED';

export const ACCOUNT_AVAILABLE_POWER_EXERCISE_RIGHT =
  'account/AVAILABLE_POWER_EXERCISE_RIGHT';
export const ACCOUNT_AVAILABLE_POWER_EXERCISE_RIGHT_SUCCESS =
  'account/AVAILABLE_POWER_EXERCISE_RIGHT_SUCCESS';
export const ACCOUNT_AVAILABLE_POWER_EXERCISE_RIGHT_FAILED =
  'account/AVAILABLE_POWER_EXERCISE_RIGHT_FAILED';

export const ACCOUNT_RIGHT_INFOR_ON_POP_UP = 'account/RIGHT_INFOR_ON_POP_UP';
export const ACCOUNT_RIGHT_INFOR_ON_POP_UP_SUCCESS =
  'account/RIGHT_INFOR_ON_POP_UP_SUCCESS';
export const ACCOUNT_RIGHT_INFOR_ON_POP_UP_FAILED =
  'account/RIGHT_INFOR_ON_POP_UP_FAILED';

export const ACCOUNT_RIGHT_SUBSCRIPTION_HISTORY =
  'account/RIGHT_SUBSCRIPTION_HISTORY';
export const ACCOUNT_RIGHT_SUBSCRIPTION_HISTORY_LOAD_MORE =
  'account/RIGHT_SUBSCRIPTION_HISTORY_LOAD_MORE';
export const ACCOUNT_RIGHT_SUBSCRIPTION_HISTORY_SUCCESS =
  'account/RIGHT_SUBSCRIPTION_HISTORY_SUCCESS';
export const ACCOUNT_RIGHT_SUBSCRIPTION_HISTORY_FAILED =
  'account/RIGHT_SUBSCRIPTION_HISTORY_FAILED';

export const ACCOUNT_RIGHT_INFOR_REGISTER_POST =
  'account/RIGHT_INFOR_REGISTER_POST';
export const ACCOUNT_RIGHT_INFOR_REGISTER_POST_SUCCESS =
  'account/RIGHT_INFOR_REGISTER_POST_SUCCESS';
export const ACCOUNT_RIGHT_INFOR_REGISTER_POST_FAILED =
  'account/RIGHT_INFOR_REGISTER_POST_FAILED';

export const ACCOUNT_OPEN_POSITION_ITEM = 'account/ACCOUNT_OPEN_POSITION_ITEM';
export const ACCOUNT_OPEN_POSITION_ITEM_SUCCESS =
  'account/ACCOUNT_OPEN_POSITION_ITEM_SUCCESS';
export const ACCOUNT_OPEN_POSITION_ITEM_FAILED =
  'account/ACCOUNT_OPEN_POSITION_ITEM_FAILED';

// Cash Transfer
export const QUERY_CASH_TRANSFER_HISTORY = 'QUERY_CASH_TRANSFER_HISTORY';
export const QUERY_CASH_TRANSFER_HISTORY_LOAD_MORE =
  'QUERY_CASH_TRANSFER_HISTORY_LOAD_MORE';
export const QUERY_CASH_TRANSFER_HISTORY_SUCCESS =
  'QUERY_CASH_TRANSFER_HISTORY_SUCCESS';
export const QUERY_CASH_TRANSFER_HISTORY_FAILED =
  'QUERY_CASH_TRANSFER_HISTORY_FAILED';

export const QUERY_TRANSFERABLE_AMOUNT = 'QUERY_TRANSFERABLE_AMOUNT';
export const QUERY_TRANSFERABLE_AMOUNT_SUCCESS =
  'QUERY_TRANSFERABLE_AMOUNT_SUCCESS';
export const QUERY_TRANSFERABLE_AMOUNT_FAILED =
  'QUERY_TRANSFERABLE_AMOUNT_FAILED';

export const QUERY_SUB_ACCOUNT = 'QUERY_SUB_ACCOUNT';
export const QUERY_SUB_ACCOUNT_SUCCESS = 'QUERY_SUB_ACCOUNT_SUCCESS';
export const QUERY_SUB_ACCOUNT_FAILED = 'QUERY_SUB_ACCOUNT_FAILED';

export const CASH_TRANSFER = 'CASH_TRANSFER';
export const CASH_TRANSFER_SUCCESS = 'CASH_TRANSFER_SUCCESS';
export const CASH_TRANSFER_FAILED = 'CASH_TRANSFER_FAILED';

export const QUERY_BANK_INFO = 'QUERY_BANK_INFO';
export const QUERY_BANK_INFO_SUCCESS = 'QUERY_BANK_INFO_SUCCESS';
export const QUERY_BANK_INFO_FAILED = 'QUERY_BANK_INFO_FAILED';

export const VSD_CASH_TRANSFER = 'VSD_CASH_TRANSFER';
export const VSD_CASH_TRANSFER_SUCCESS = 'VSD_CASH_TRANSFER_SUCCESS';
export const VSD_CASH_TRANSFER_FAILED = 'VSD_CASH_TRANSFER_FAILED';

export const QUERY_VSD_CASH_TRANSFER_HISTORY =
  'QUERY_VSD_CASH_TRANSFER_HISTORY';
export const QUERY_VSD_CASH_TRANSFER_HISTORY_LOAD_MORE =
  'QUERY_VSD_CASH_TRANSFER_HISTORY_LOAD_MORE';
export const QUERY_VSD_CASH_TRANSFER_HISTORY_SUCCESS =
  'QUERY_VSD_CASH_TRANSFER_HISTORY_SUCCESS';
export const QUERY_VSD_CASH_TRANSFER_HISTORY_FAILED =
  'QUERY_VSD_CASH_TRANSFER_HISTORY_FAILED';

export const QUERY_DERIVATIVE_CASH_TRANSFER_HISTORY =
  'QUERY_DERIVATIVE_CASH_TRANSFER_HISTORY';
export const QUERY_DERIVATIVE_CASH_TRANSFER_HISTORY_LOAD_MORE =
  'QUERY_DERIVATIVE_CASH_TRANSFER_HISTORY_LOAD_MORE';
export const QUERY_DERIVATIVE_CASH_TRANSFER_HISTORY_SUCCESS =
  'QUERY_DERIVATIVE_CASH_TRANSFER_HISTORY_SUCCESS';
export const QUERY_DERIVATIVE_CASH_TRANSFER_HISTORY_FAILED =
  'QUERY_DERIVATIVE_CASH_TRANSFER_HISTORY_FAILED';

export const QUERY_DERIVATIVE_TRANSFERABLE_AMOUNT =
  'QUERY_DERIVATIVE_TRANSFERABLE_AMOUNT';
export const QUERY_DERIVATIVE_TRANSFERABLE_AMOUNT_SUCCESS =
  'QUERY_DERIVATIVE_TRANSFERABLE_AMOUNT_SUCCESS';
export const QUERY_DERIVATIVE_TRANSFERABLE_AMOUNT_FAILED =
  'QUERY_DERIVATIVE_TRANSFERABLE_AMOUNT_FAILED';

export const DERIVATIVE_INTERNAL_CASH_TRANSFER =
  ' DERIVATIVE_INTERNAL_CASH_TRANSFER';
export const DERIVATIVE_INTERNAL_CASH_TRANSFER_SUCCESS =
  ' DERIVATIVE_INTERNAL_CASH_TRANSFER_SUCCESS';
export const DERIVATIVE_INTERNAL_CASH_TRANSFER_FAILED =
  ' DERIVATIVE_INTERNAL_CASH_TRANSFER_FAILED';

export const DERIVATIVE_BANK_CASH_TRANSFER = ' DERIVATIVE_BANK_CASH_TRANSFER';
export const DERIVATIVE_BANK_CASH_TRANSFER_SUCCESS =
  ' DERIVATIVE_BANK_CASH_TRANSFER_SUCCESS';
export const DERIVATIVE_BANK_CASH_TRANSFER_FAILED =
  ' DERIVATIVE_BANK_CASH_TRANSFER_FAILED';

export const CASH_TRANSFER_SHOW_NOTIFICATION =
  'CASH_TRANSFER_SHOW_NOTIFICATION';
