import React from "react";

const HomeComponent = () => {
  return (
    <main>
      <div className="container py-4">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">在线学习系统</h1>
            <p className="col-md-8 fs-4">
              本系统使用 React.js 作为前端框架，Node.js、MongoDB
              作为后端服务器。这种项目称为 MERN
              项目，它是创建现代网站的最流行的方式之一。
            </p>
            <button className="btn btn-primary btn-lg" type="button">
              看看它怎么运作。
            </button>
          </div>
        </div>

        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h2>作为一个学生</h2>
              <p>
                学生可以注册他们喜欢的课程。本网站仅供本人练习，请勿提供任何个人资料，譬如信用卡号码等。
              </p>
              <button className="btn btn-outline-light" type="button">
                登陆会员、或者注册一个账号
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>作为一名讲师</h2>
              <p>
                您可以通过注册成为一名讲师，并开始制作在线课程，本网站仅供本人练习，请勿提供任何个人资料，譬如信用卡号码等。
              </p>
              <button className="btn btn-outline-secondary" type="button">
                今天开始开设课程
              </button>
            </div>
          </div>
        </div>

        <footer className="pt-3 mt-4 text-muted border-top">
          &copy; 2023 Zhicheng Tong
        </footer>
      </div>
    </main>
  );
};

export default HomeComponent;
