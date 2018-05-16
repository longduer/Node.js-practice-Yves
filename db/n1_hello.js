/*
 Navicat MySQL Data Transfer

 Source Server         : 192.168.31.182
 Source Server Type    : MySQL
 Source Server Version : 50722
 Source Host           : 192.168.31.182
 Source Database       : nodejs

 Target Server Type    : MySQL
 Target Server Version : 50722
 File Encoding         : utf-8

 Date: 05/16/2018 18:38:09 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `ionc_user`
-- ----------------------------
DROP TABLE IF EXISTS `ionc_user`;
CREATE TABLE `ionc_user` (
  `id` varchar(256) NOT NULL COMMENT '主键',
  `username` varchar(50) NOT NULL COMMENT '用户名',
  `mobile` varchar(20) NOT NULL COMMENT '手机号',
  `password` varchar(256) NOT NULL COMMENT '密码',
  `create_time` varchar(20) NOT NULL COMMENT '创建时间',
  `update_time` varchar(20) NOT NULL COMMENT '更新时间',
  `invite_code` varchar(20) DEFAULT NULL COMMENT '邀请码',
  `source` varchar(5) DEFAULT NULL COMMENT '来源分类；',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `ionc_user`
-- ----------------------------
BEGIN;
INSERT INTO `ionc_user` VALUES ('000001', '2003', '18321972003', 'glory', '2018-05-16 15:15:15', '2018-05-16 15:15:15', 'yves', '1'), ('000002', '2003', '18321972003', 'glory', '2018-05-16 15:15:15', '2018-05-16 15:15:15', 'yves', '1'), ('000003', '2003', '18321972003', 'glory', '2018-05-16 15:15:15', '2018-05-16 15:15:15', 'yves', '1');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
