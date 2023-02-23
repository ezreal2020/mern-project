import { useState, useEffect } from "react";
import AuthService from "../services/auth.service";

const ProfileComponent = () => {
  let [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    setCurrentUser(AuthService.getCurrentUser());
  }, []);

  return (
    <div style={{ padding: "3rem" }}>
      {!currentUser && <div> 在获取您的个人资料之前，您必须先登录。</div>}
      {currentUser && (
        <div>
          <h2>以下是您的个人档案：</h2>

          <table className="table">
            <tbody>
              <tr>
                <td>
                  <strong>姓名：{currentUser.user.username}</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>您的用户ID: {currentUser.user._id}</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>您注册的电子信箱: {currentUser.user.email}</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>身份: {currentUser.user.role}</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProfileComponent;
