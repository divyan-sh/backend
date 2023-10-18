const Playlist = require("./models/Playlists");

// Create Document in DataBase
const createPlaylist = async (doc) => {
  try {
    const newPlaylist = new Playlist(doc);
    const result = await newPlaylist.save();
    return {
      status: "success",
      message: "Playlist created successfully :)",
    };
  } catch (err) {
    return {
      status: "error",
      message: "Error creating playlist: " + err.message,
    };
  }
};

// Reading Document from the DataBase
const showAllPlaylist = async (page, limit) => {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  let results = {};
  results.totalPages = Math.ceil((await Playlist.countDocuments()) / limit);

  try {
    results.playlists = await Playlist.find()
      .limit(limit)
      .skip(startIndex)
      .sort({ _id: -1 });

    // A Condition check to check that previous page should not be displayed when we are on the fast page and the next page should not be displayed when we are on the last page.
    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    } else results.previous = undefined;
    if (endIndex < (await Playlist.countDocuments()))
      results.next = {
        page: page + 1,
        limit: limit,
      };
    else results.next = undefined;
  } catch (error) {
    results.err = {
      msg: error.message,
    };
  }

  return results;
};

//Searching Playlist...
const searchPlaylist = async ({ formData, operator }) => {
  let results = {};
  const query = {};
  if (formData.author)
    query.author = { $regex: `${formData.author}`, $options: "i" };
  if (formData.title)
    query.title = { $regex: `${formData.title}`, $options: "i" };
  if (formData.courseType)
    query.courseType = { $regex: `${formData.courseType}`, $options: "i" };
  if (formData.level)
    query.level = { $regex: `${formData.level}`, $options: "i" };
  if (formData.link) query.link = { $regex: `${formData.link}`, $options: "i" };
  if (formData.rating) {
    if (operator[1] == "equal") query.rating = formData.rating;
    else query.rating = { [operator[1]]: +formData.rating };
  }
  if (formData.videos) {
    if (operator[0] == "equal") query.videos = formData.videos;
    else query.videos = { [operator[0]]: +formData.videos };
  }
  try {
    results.playlist = await Playlist.find(query).sort({ _id: -1 });
  } catch (error) {
    results.err = {
      msg: error.message,
    };
  }
  return results;
};

//Update Playlist
const updatePlaylist = async (updateQuery) => {
  let results = {};
  if (updateQuery.uniqueId) {
    try {
      results.result = await Playlist.updateOne(
        { _id: updateQuery.uniqueId },
        updateQuery.formData
      );
    } catch (error) {
      results.err = {
        msg: error.message,
      };
    }
  } else if (updateQuery.multipleId.length > 0 || updateQuery.updateAll) {
    try {
      results.result = await Playlist.updateMany(
        { _id: { $in: updateQuery.multipleId } },
        updateQuery.formData
      );
    } catch (error) {
      results.err = {
        msg: error.message,
      };
    }
  }

  return results;
};

const deletePlaylist = async (query) => {
  let results = {};
  if (query.uniqueId) {
    try {
      results.result = await Playlist.deleteOne({ _id: query.uniqueId });
    } catch (error) {
      results.err = {
        msg: error.message,
      };
    }
  } else if (query.multipleId.length > 0 || query.deleteAll) {
    try {
      results.result = await Playlist.deleteMany({
        _id: { $in: query.multipleId },
      });
    } catch (error) {
      results.err = {
        msg: error.message,
      };
    }
  }

  return results;
};

module.exports = {
  createPlaylist,
  showAllPlaylist,
  searchPlaylist,
  updatePlaylist,
  deletePlaylist,
};
