
const userService = require('../../services/user.services');
const resp=require('../../config/api.response')
exports.getOrders= async (req, res)=> {
  try {
    const orders = await userService.getOrders();
    return resp.success(res, orders);
  } catch (error) {
    console.error(error);
    return resp.error(res, error);
  }
}
