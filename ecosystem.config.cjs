module.exports = {
    apps: [{
        name: 'GraphQL_API', // pm2 name
        script: 'dist/src/main', // 앱 실행 스크립트
        // script: 'env-cmd -e common,prod node ./build/index.js', // 앱 실행 스크립트
        // script: './build/index.js', // 앱 실행 스크립트
        instances: 2, // 클러스터 모드 사용 시 생성할 인스턴스 수
        exec_mode: 'cluster', // fork, cluster 모드 중 선택
        merge_logs: true, // 클러스터 모드 사용 시 각 클러스터에서 생성되는 로그를 한 파일로 합쳐준다.
        autorestart: true, // 프로세스 실패 시 자동으로 재시작할지 선택
        watch: false, // 파일이 변경되었을 때 재시작 할지 선택
        max_memory_restart: "512M", // 프로그램의 메모리 크기가 일정 크기 이상이 되면 재시작한다.
        // wait_ready: true, // Node.js 앱으로부터 앱이 실행되었다는 신호를 직접 받겠다는 의미
        // listen_timeout: 50000, // 앱 실행 신호까지 기다릴 최대 시간. ms 단위.
        // kill_timeout: 5000, // 새로운 프로세스 실행이 완료된 후 예전 프로세스를 교체하기까지 기다릴 시간
    },]
};
