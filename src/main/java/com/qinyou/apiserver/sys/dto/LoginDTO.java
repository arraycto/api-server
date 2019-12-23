package com.qinyou.apiserver.sys.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@ApiModel(description = "登录 请求参数")
public class LoginDTO {

    @ApiModelProperty(value = "用户名",example = "admin")
    @NotBlank(message = "{usernameBlank}")
    private String username;

    @ApiModelProperty(value = "密码",example = "123456")
    @NotBlank(message = "{passwordBlank}")
    private String password;
}
