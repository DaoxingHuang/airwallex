<template>
  <div class="al-content">
    <div class="title">a bettery way to enjoy every day.</div>
    <div>be the first to know when we lanch.</div>
    <div class="action">
      <el-button @click="centerDialogVisible = true">Request a invite</el-button>
    </div>
    <el-dialog :close-on-click-modal="false"
      title="Request a invite" width="20rem"
      :visible.sync="centerDialogVisible" center>
      <span></span>
      <el-form :rules="rules" ref="inviteForm" :model="invite">
        <el-form-item prop="name">
          <el-input :disabled="sending" placeholder="Full Name" v-model="invite.name"></el-input>
        </el-form-item>
        <el-form-item prop="email">
          <el-input :disabled="sending" placeholder="Email" v-model="invite.email"></el-input>
        </el-form-item>
        <el-form-item prop="confirmEmail">
          <el-input :disabled="sending" placeholder="Confirm Email" v-model="invite.confirmEmail"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="sendRequest('inviteForm')" >{{sending?'sending please wait...': 'send'}}</el-button >
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { SEND_REQUEST_A_INVITE } from "../store/rai";
export default {
  data() {
    return {
      centerDialogVisible: false,
      sending: false,
      rules: {
        name: [
          { required: true, message: "Please enter your name", trigger: "change" },
        ],
        email: [
            {type: 'email', required: true, message: 'Please enter email correctly ', trigger: 'change' },
            // {validator: this.validateEmail, trigger: 'change' }
        ],
        confirmEmail: [
            {validator: this.validateConfirmEmail, trigger: 'blur' }
        ]
      },
    };
  },
  computed: {
    ...mapState({
      invite: (state) => state.ri,
    }),
  },
  methods: {
    ...mapActions([SEND_REQUEST_A_INVITE]),
    sendRequest(formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            this.sending = true;
            await this[SEND_REQUEST_A_INVITE]({name:this.invite.name, email: this.invite.email});
            this.sending = false;
            this.centerDialogVisible = false;
            this.$message({message:'All done!you will be one of the first to experience Broccoli & Co. when we launch.' ,type: 'success'});
            this.$refs[formName].resetFields();
          } else {
            return false;
          }
        });
    },
    validateConfirmEmail(rule, value, callback){
        if(value !== this.invite.email){
            callback(new Error('The confimed email is not the same'));
        }
        callback();
    }
  },
};
</script>

<style lang='scss'>
.al-content {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  height: 100%;
  div{
    flex: 1;
  }
  // height: 100vh;
  .title {
    font-size: 3rem;
    font-weight: 700;
  }
  .action{
      flex: none;
  }
}
.el-dialog--center .el-dialog__body {
  padding: 1rem 1rem;
}
</style>