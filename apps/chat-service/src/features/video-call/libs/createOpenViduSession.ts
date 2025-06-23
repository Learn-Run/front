import { OpenVidu } from 'openvidu-browser';

export default function createOpenViduSession() {
    const OV = new OpenVidu();
    const session = OV.initSession();

    return { OV, session };
}
