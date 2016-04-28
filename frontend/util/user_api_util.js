module.exports = {
  fetchCurrentUser: function(success, error){
    $.ajax({
      url: "api/session",
      method: "GET",
      success: success,
      error: error
    });
  },

  login: function(user, success, error){
    $.ajax({
      url: "api/session",
      type: "POST",
      data: { user: user},
      success: success,
      error: error
    });
  },

  logout: function(success, error){
    $.ajax({
      url: "api/session",
      method: "DELETE",
      success: success,
      error: error
    });
  },

  create: function(user, success, error){
    $.ajax({
      url: "api/user",
      type: "POST",
      data: { user: user},
      success: success,
      error: error
    });
  }
};
