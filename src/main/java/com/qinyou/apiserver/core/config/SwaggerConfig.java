package com.qinyou.apiserver.core.config;

import com.qinyou.apiserver.core.security.JwtClaim;
import com.qinyou.apiserver.core.security.JwtUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.ParameterBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.schema.ModelRef;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.service.Parameter;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.ArrayList;
import java.util.List;

/**
 * swagger 配置，dev 环境生效
 * @author chuang
 */
@Profile("dev")
@Slf4j
@Configuration
@EnableSwagger2
public class SwaggerConfig {

    private final String DEFAULT_CONTACTNAME = "qinyou";
    private final String DEFAULT_CONTACTURL = "https://github.com/qinyou";
    private final String DEFAULT_CONTACTEMAIL = "916432779@qq.com";

    /**
     * 账号相关，登录、获取权限等
     * TODO 创建统一的请求头参数，如果放行某单个路由？ 这是个问题
     * @return
     */
    @Bean
    public Docket createSysRestApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .groupName("1. 账号")     // 此处为 中文swagger-ui 会有小bug, 但不影响使用
                .apiInfo(createApiInfo("账号认证-权限-重置","账号认证、用户权限、重置密码等"))
                .ignoredParameterTypes(JwtClaim.class)
                .select()
                .paths(PathSelectors.ant("/account/**"))
                .build();
    }


    /**
     * 后台管理 api 文档
     * 用户权限、数据字典、用户操作日志
     * @return
     */
    @Bean
    public Docket createSysRestApi2() {
        return new Docket(DocumentationType.SWAGGER_2)
                .groupName("2. 后台管理")     // 此处为 中文 swagger-ui 会有小bug, 但不影响使用
                .apiInfo(createApiInfo("后台配置","资源管理、用户角色权限、操作日志、数据字典等"))
                .ignoredParameterTypes(JwtClaim.class)
                .globalOperationParameters(commonTokenParams())
                .select()
                .paths(PathSelectors.ant("/sys/**"))
                .build();
    }

    @Bean
    public Docket createSysRestApi3() {
        return new Docket(DocumentationType.SWAGGER_2)
                .groupName("3. 通用接口")     // 此处为 中文swagger-ui 会有小bug, 但不影响使用
                .apiInfo(createApiInfo("通用接口","文件上传等"))
                .ignoredParameterTypes(JwtClaim.class)
                .select()
                .paths(PathSelectors.ant("/file/**"))
                .build();
    }


    // 更多模块 api 扩展

    /**
     * 创建统一的 ApiInfo 信息
     * @param title
     * @param description
     * @return
     */
    private ApiInfo createApiInfo(String title,String description){
        ApiInfo apiInfo = new ApiInfoBuilder()
                .title(title)
                .description(description)
                //.version("v1")  通过 context path 判断 api 版本号，故此处不再写 版本号
                .contact(new Contact(DEFAULT_CONTACTNAME, DEFAULT_CONTACTURL, DEFAULT_CONTACTEMAIL))
                .build();
        return apiInfo;
    }


    /**
     * 创建 token 公共参数
     * @return
     */
    private List<Parameter> commonTokenParams(){
        ParameterBuilder parameterBuilder = new ParameterBuilder();
        parameterBuilder.name("Authorization").description("身份认证Token")
                .modelRef(new ModelRef("string"))
                .parameterType("header").required(true)
                .scalarExample(genTokenExample());
        List<Parameter> parameters = new ArrayList<>();
        parameters.add(parameterBuilder.build());
        return parameters;
    }

    /**
     * 生成token 例子 （自服务启动 100天后过期）
     * @return
     */
    private String genTokenExample(){
        JwtUtil jwtUtil = new JwtUtil();
        jwtUtil.setSecret("123456");
        jwtUtil.setExpireIdle(2400);
        String token = jwtUtil.generate("admin");
        while (token.contains("_") || !jwtUtil.verify(token)){
            token = jwtUtil.generate("admin");
        }
        return "Bearer "+token;
    }
}
