import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  TagOutlined,
  RobotOutlined,
  BarsOutlined,
  MailOutlined,
  ZhihuOutlined,
  WeiboOutlined,
  GithubOutlined,
  MehOutlined,
  SmileOutlined,
  CloseOutlined
} from '@ant-design/icons';
import { useUser } from '@/client/selector/useUser';
import { useBlogger } from '@/client/selector/useBlogger';
import styles from './index.module.scss';
import { WhiteSpace } from '@/client/components/whiteSpace';

export function Header() {
  const [collapsed, setCollapsed] = useState(false);

  const { blogger } = useBlogger();
  const { user } = useUser();

  if (!blogger) return null;

  const isOwner = useMemo(() => {
    return blogger && user && blogger.user_id === user.user_id;
  }, [blogger, user]);

  return (
    <div>
      <div className={styles['pc_header'] + ' row hidden-sm hidden-xs'}>
        <h2>{blogger.intro}</h2>
        <div className={styles['centerbox']}>
          <div>
            <img src={blogger.avatar} alt="" className={styles['logo']} />
          </div>
          <h1>{blogger.nickname}的博客</h1>
          <ul className={styles['pc_nav']}>
            <li className={styles['menu-link']}>
              <Link to={'/'}>
                <HomeOutlined />
                <WhiteSpace />
										主页
              </Link>
            </li>
            <li className={styles['menu-link']}>
              <Link to={'/record'}>
                <BarsOutlined />
                <WhiteSpace />
										归档
              </Link>

            </li>
            <li className={styles['menu-link']}>
              <Link to={'/tag'}>
                <TagOutlined />
                <WhiteSpace />
										标签
              </Link>

            </li>
            <li className={styles['menu-link']}>
              <Link to={'/about'}>
                <RobotOutlined />
                <WhiteSpace />
										关于
              </Link>

            </li>
          </ul>
          <div className={styles['concat']}>
            <ul className={styles['concat-wrap']}>
              {blogger.concat.email && (
                <li className={styles['menu-link']}>
                  <a target="_blank" href={blogger.concat.email}>
                    <MailOutlined />
                    <WhiteSpace /> 邮箱
										</a>
                </li>
              )}
              {blogger.concat.github && (
                <li className={styles['menu-link']}>
                  <a target="_blank" href={blogger.concat.github}>
                    <GithubOutlined />
                    <WhiteSpace /> github
										</a>
                </li>
              )}
              {blogger.concat.zhihu && (
                <li className={styles['menu-link']}>
                  <a target="_blank" href={blogger.concat.zhihu}>
                    <ZhihuOutlined />
                    <WhiteSpace /> 知乎
										</a>
                </li>
              )}
              {blogger.concat.weibo && (
                <li className={styles['menu-link']}>
                  <a target="_blank" href={blogger.concat.weibo}>
                    <WeiboOutlined />
                    <WhiteSpace /> 微博
										</a>
                </li>
              )}
            </ul>
          </div>
          <div className={styles['footer']}>
            {isOwner ? (
              <Link to="/admin">
                <MehOutlined /><WhiteSpace />后台管理
              </Link>
            ) : (
                <Link to="/login">
                  <SmileOutlined /><WhiteSpace />马上登陆
                </Link>
              )}
          </div>
        </div>
      </div>
      <div className={styles['mb_header'] + ' hidden-md hidden-lg'}>
        <div
          className={styles['mb_menu_btn']}
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <span>
              <BarsOutlined />
            </span>
          ) : (
              <span>
                <CloseOutlined />
              </span>
            )}
        </div>
        <ul
          className={styles['mb_nav']}
          style={{
            maxHeight: collapsed ? 0 : '500px'
          }}
        >
          <li className={styles['menu-link']}>
            <Link to="">
              <HomeOutlined /><WhiteSpace />主页
            </Link>
          </li>
          <li className={styles['menu-link']}>
            <Link to="">
              <HomeOutlined /><WhiteSpace />归档
            </Link>
          </li>
          <li className={styles['menu-link']}>
            <Link to="">
              <HomeOutlined /><WhiteSpace />标签
            </Link>
          </li>
          <li className={styles['menu-link']}>
            <Link to="">
              <HomeOutlined /><WhiteSpace />关于
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}