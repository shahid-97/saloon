
const userService = require('../../services/user.services');
const resp=require('../../config/api.response')
exports.getOrders= async (req, res)=> {
  try {
    const dummyData=await userService.getVendor();
    const orders = await userService.getOrders();
    return resp.success(res, orders,dummyData );
  } catch (error) {
    console.error(error);
    return resp.error(res, error);
  }
}
