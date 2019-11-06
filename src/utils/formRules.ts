class Rules {
  public name(label: string) {
    return [
      { required: true, message: `请输入${label}`, trigger: 'blur' },
      { max: 100, message: '不能超过 100 个字符', trigger: 'blur' },
      { min: 2, message: '不能少于 2 个字符', trigger: 'blur' },
      {
        pattern: '^([a-z])([a-z0-9_-]){1,99}$',
        message: `${label}需要以小写字母开头, 可包含小写字母, 数字, _和-, 并且长度在2-100之间.`,
        trigger: 'blur',
      },
    ];
  }

  public getNoChinese() {
    return { pattern: '^([^\u4e00-\u9fa5]){6,20}$', message: '不能输入中文,长度6-20' };
  }

  public getNoEmpty(name: string) {
    return { required: true, message: `请输入${name}` };
  }

  public domainSelected(label: string) {
    return [
      { required: true, message: `请选择${label}`, trigger: 'blur' },
    ];
  }
}

export const FormRules = new Rules();
