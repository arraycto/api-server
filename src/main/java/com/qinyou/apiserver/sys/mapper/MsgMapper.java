package com.qinyou.apiserver.sys.mapper;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.qinyou.apiserver.sys.dto.MsgDTO;
import com.qinyou.apiserver.sys.entity.Msg;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

/**
 * <p>
 * 消息主表，保存消息内容 Mapper 接口
 * </p>
 *
 * @author chuang
 * @since 2020-01-08
 */
public interface MsgMapper extends BaseMapper<Msg> {

    /**
     * 未读消息列表
     * @param page
     * @param userId
     * @param queryWrapper
     * @return
     */
    @Select(" SELECT a.id, b.title, b.create_time as createTime, d.logo, a.read_time as readTime " +
            " FROM sys_msg_detail a " +
            " LEFT JOIN sys_msg b on a.msg_id = b.id " +
            " LEFT JOIN sys_msg_type d on b.type_code = d.id " +
            " where a.receiver = #{user_id} and a.is_read = ${read} and  ${ew.sqlSegment} ")
    IPage<MsgDTO> listUnRead(IPage<MsgDTO> page, @Param("user_id") String userId,
                             @Param("read") Integer read,
                             @Param("ew") QueryWrapper<MsgDTO> queryWrapper );

}
