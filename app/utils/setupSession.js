import Globals from './globals';
import { $Cookies } from './cookies';
import { JWT_TOKEN, ERP_REPORT } from './constants';
const setupSession = () => {
  Globals.reset();
  // const token = $Cookies.get(JWT_TOKEN);
  const token = "897ab936f13a8ee6f651591964a73645";
  const erpReport = $Cookies.get(ERP_REPORT);
  Globals.init({
    public: {
      erpReport,
    },
    private: {
      token,
    },
  });
};
export default setupSession;
